import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class GetDeviceCellularGatewayPortForwardingRulesPathParams:
    serial: str = dataclasses.field(metadata={'path_param': { 'field_name': 'serial', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetDeviceCellularGatewayPortForwardingRulesRequest:
    path_params: GetDeviceCellularGatewayPortForwardingRulesPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetDeviceCellularGatewayPortForwardingRulesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_device_cellular_gateway_port_forwarding_rules_200_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
