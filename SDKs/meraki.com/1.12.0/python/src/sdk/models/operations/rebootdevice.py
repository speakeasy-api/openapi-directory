import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class RebootDevicePathParams:
    serial: str = dataclasses.field(metadata={'path_param': { 'field_name': 'serial', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class RebootDeviceRequest:
    path_params: RebootDevicePathParams = dataclasses.field()
    

@dataclasses.dataclass
class RebootDeviceResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    reboot_device_202_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
