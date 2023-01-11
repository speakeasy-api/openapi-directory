import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class GetNetworkSmDeviceWlanListsPathParams:
    device_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'deviceId', 'style': 'simple', 'explode': False }})
    network_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetNetworkSmDeviceWlanListsRequest:
    path_params: GetNetworkSmDeviceWlanListsPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetNetworkSmDeviceWlanListsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_network_sm_device_wlan_lists_200_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
