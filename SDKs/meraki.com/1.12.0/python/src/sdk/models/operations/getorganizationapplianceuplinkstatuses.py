import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class GetOrganizationApplianceUplinkStatusesPathParams:
    organization_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'organizationId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetOrganizationApplianceUplinkStatusesQueryParams:
    ending_before: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'endingBefore', 'style': 'form', 'explode': True }})
    iccids: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'iccids', 'style': 'form', 'explode': False }})
    network_ids: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'networkIds', 'style': 'form', 'explode': False }})
    per_page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'perPage', 'style': 'form', 'explode': True }})
    serials: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'serials', 'style': 'form', 'explode': False }})
    starting_after: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'startingAfter', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetOrganizationApplianceUplinkStatusesRequest:
    path_params: GetOrganizationApplianceUplinkStatusesPathParams = dataclasses.field()
    query_params: GetOrganizationApplianceUplinkStatusesQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetOrganizationApplianceUplinkStatusesResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    get_organization_appliance_uplink_statuses_200_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
