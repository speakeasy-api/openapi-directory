import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class GetNetworkDevicesPathParams:
    network_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetNetworkDevicesRequest:
    path_params: GetNetworkDevicesPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetNetworkDevicesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_network_devices_200_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
