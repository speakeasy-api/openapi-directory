import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class GetDeviceSwitchRoutingInterfaceDhcpPathParams:
    interface_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'interfaceId', 'style': 'simple', 'explode': False }})
    serial: str = dataclasses.field(metadata={'path_param': { 'field_name': 'serial', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetDeviceSwitchRoutingInterfaceDhcpRequest:
    path_params: GetDeviceSwitchRoutingInterfaceDhcpPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetDeviceSwitchRoutingInterfaceDhcpResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_device_switch_routing_interface_dhcp_200_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
