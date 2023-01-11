import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class UnenrollNetworkSmDevicePathParams:
    device_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'deviceId', 'style': 'simple', 'explode': False }})
    network_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UnenrollNetworkSmDeviceRequest:
    path_params: UnenrollNetworkSmDevicePathParams = dataclasses.field()
    

@dataclasses.dataclass
class UnenrollNetworkSmDeviceResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    unenroll_network_sm_device_200_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
