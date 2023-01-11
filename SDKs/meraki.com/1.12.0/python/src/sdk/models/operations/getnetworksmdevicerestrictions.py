import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class GetNetworkSmDeviceRestrictionsPathParams:
    device_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'deviceId', 'style': 'simple', 'explode': False }})
    network_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetNetworkSmDeviceRestrictionsRequest:
    path_params: GetNetworkSmDeviceRestrictionsPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetNetworkSmDeviceRestrictionsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_network_sm_device_restrictions_200_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
