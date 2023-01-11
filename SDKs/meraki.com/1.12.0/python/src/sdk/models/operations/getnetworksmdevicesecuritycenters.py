import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class GetNetworkSmDeviceSecurityCentersPathParams:
    device_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'deviceId', 'style': 'simple', 'explode': False }})
    network_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetNetworkSmDeviceSecurityCentersRequest:
    path_params: GetNetworkSmDeviceSecurityCentersPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetNetworkSmDeviceSecurityCentersResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_network_sm_device_security_centers_200_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
