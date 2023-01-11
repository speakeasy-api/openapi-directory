import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class CycleDeviceSwitchPortsPathParams:
    serial: str = dataclasses.field(metadata={'path_param': { 'field_name': 'serial', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class CycleDeviceSwitchPortsRequestBody:
    ports: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ports') }})
    

@dataclasses.dataclass
class CycleDeviceSwitchPortsRequest:
    path_params: CycleDeviceSwitchPortsPathParams = dataclasses.field()
    request: CycleDeviceSwitchPortsRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class CycleDeviceSwitchPortsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    cycle_device_switch_ports_200_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
