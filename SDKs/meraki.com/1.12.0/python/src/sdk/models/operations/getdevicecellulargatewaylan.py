import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class GetDeviceCellularGatewayLanPathParams:
    serial: str = dataclasses.field(metadata={'path_param': { 'field_name': 'serial', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetDeviceCellularGatewayLanRequest:
    path_params: GetDeviceCellularGatewayLanPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetDeviceCellularGatewayLanResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_device_cellular_gateway_lan_200_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
