import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class GetNetworkSmDeviceConnectivityPathParams:
    device_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'deviceId', 'style': 'simple', 'explode': False }})
    network_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetNetworkSmDeviceConnectivityQueryParams:
    ending_before: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'endingBefore', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'perPage', 'style': 'form', 'explode': True }})
    starting_after: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'startingAfter', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetNetworkSmDeviceConnectivityRequest:
    path_params: GetNetworkSmDeviceConnectivityPathParams = dataclasses.field()
    query_params: GetNetworkSmDeviceConnectivityQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetNetworkSmDeviceConnectivityResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    get_network_sm_device_connectivity_200_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
