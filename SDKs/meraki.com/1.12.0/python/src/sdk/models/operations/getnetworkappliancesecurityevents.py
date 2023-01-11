import dataclasses
from typing import Any,Optional
from enum import Enum


@dataclasses.dataclass
class GetNetworkApplianceSecurityEventsPathParams:
    network_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    
class GetNetworkApplianceSecurityEventsSortOrderEnum(str, Enum):
    ASCENDING = "ascending"
    DESCENDING = "descending"


@dataclasses.dataclass
class GetNetworkApplianceSecurityEventsQueryParams:
    ending_before: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'endingBefore', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'perPage', 'style': 'form', 'explode': True }})
    sort_order: Optional[GetNetworkApplianceSecurityEventsSortOrderEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sortOrder', 'style': 'form', 'explode': True }})
    starting_after: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'startingAfter', 'style': 'form', 'explode': True }})
    t0: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 't0', 'style': 'form', 'explode': True }})
    t1: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 't1', 'style': 'form', 'explode': True }})
    timespan: Optional[float] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'timespan', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetNetworkApplianceSecurityEventsRequest:
    path_params: GetNetworkApplianceSecurityEventsPathParams = dataclasses.field()
    query_params: GetNetworkApplianceSecurityEventsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetNetworkApplianceSecurityEventsResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    get_network_appliance_security_events_200_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
