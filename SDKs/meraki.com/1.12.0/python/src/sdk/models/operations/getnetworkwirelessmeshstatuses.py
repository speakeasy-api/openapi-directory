import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class GetNetworkWirelessMeshStatusesPathParams:
    network_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetNetworkWirelessMeshStatusesQueryParams:
    ending_before: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'endingBefore', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'perPage', 'style': 'form', 'explode': True }})
    starting_after: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'startingAfter', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetNetworkWirelessMeshStatusesRequest:
    path_params: GetNetworkWirelessMeshStatusesPathParams = dataclasses.field()
    query_params: GetNetworkWirelessMeshStatusesQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetNetworkWirelessMeshStatusesResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    get_network_wireless_mesh_statuses_200_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
