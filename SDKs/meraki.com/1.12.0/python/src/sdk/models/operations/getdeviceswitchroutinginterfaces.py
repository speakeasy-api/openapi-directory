import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class GetDeviceSwitchRoutingInterfacesPathParams:
    serial: str = dataclasses.field(metadata={'path_param': { 'field_name': 'serial', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetDeviceSwitchRoutingInterfacesRequest:
    path_params: GetDeviceSwitchRoutingInterfacesPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetDeviceSwitchRoutingInterfacesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_device_switch_routing_interfaces_200_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
