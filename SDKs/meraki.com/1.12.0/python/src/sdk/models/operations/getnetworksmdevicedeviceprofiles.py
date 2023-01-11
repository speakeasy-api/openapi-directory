import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class GetNetworkSmDeviceDeviceProfilesPathParams:
    device_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'deviceId', 'style': 'simple', 'explode': False }})
    network_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetNetworkSmDeviceDeviceProfilesRequest:
    path_params: GetNetworkSmDeviceDeviceProfilesPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetNetworkSmDeviceDeviceProfilesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_network_sm_device_device_profiles_200_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
