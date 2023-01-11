import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class BlinkDeviceLedsPathParams:
    serial: str = dataclasses.field(metadata={'path_param': { 'field_name': 'serial', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class BlinkDeviceLedsRequestBody:
    duration: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('duration') }})
    duty: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('duty') }})
    period: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('period') }})
    

@dataclasses.dataclass
class BlinkDeviceLedsRequest:
    path_params: BlinkDeviceLedsPathParams = dataclasses.field()
    request: Optional[BlinkDeviceLedsRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class BlinkDeviceLedsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    blink_device_leds_202_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
