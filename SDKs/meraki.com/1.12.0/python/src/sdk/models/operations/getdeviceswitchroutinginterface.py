import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class GetDeviceSwitchRoutingInterfacePathParams:
    interface_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'interfaceId', 'style': 'simple', 'explode': False }})
    serial: str = dataclasses.field(metadata={'path_param': { 'field_name': 'serial', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetDeviceSwitchRoutingInterfaceRequest:
    path_params: GetDeviceSwitchRoutingInterfacePathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetDeviceSwitchRoutingInterfaceResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_device_switch_routing_interface_200_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
