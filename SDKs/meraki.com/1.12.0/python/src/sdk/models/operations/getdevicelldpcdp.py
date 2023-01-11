import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class GetDeviceLldpCdpPathParams:
    serial: str = dataclasses.field(metadata={'path_param': { 'field_name': 'serial', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetDeviceLldpCdpRequest:
    path_params: GetDeviceLldpCdpPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetDeviceLldpCdpResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_device_lldp_cdp_200_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
