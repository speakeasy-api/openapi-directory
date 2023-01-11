import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class GetNetworkSmUserAccessDevicesPathParams:
    network_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetNetworkSmUserAccessDevicesQueryParams:
    ending_before: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'endingBefore', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'perPage', 'style': 'form', 'explode': True }})
    starting_after: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'startingAfter', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetNetworkSmUserAccessDevicesRequest:
    path_params: GetNetworkSmUserAccessDevicesPathParams = dataclasses.field()
    query_params: GetNetworkSmUserAccessDevicesQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetNetworkSmUserAccessDevicesResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    get_network_sm_user_access_devices_200_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
