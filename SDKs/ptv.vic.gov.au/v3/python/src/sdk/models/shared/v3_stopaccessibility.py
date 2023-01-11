import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import v3_stopaccessibilitywheelchair as shared_v3_stopaccessibilitywheelchair


@dataclass_json
@dataclasses.dataclass
class V3StopAccessibility:
    audio_customer_information: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('audio_customer_information') }})
    escalator: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('escalator') }})
    hearing_loop: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hearing_loop') }})
    lift: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lift') }})
    lighting: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lighting') }})
    platform_number: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('platform_number') }})
    stairs: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stairs') }})
    stop_accessible: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stop_accessible') }})
    tactile_ground_surface_indicator: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tactile_ground_surface_indicator') }})
    waiting_room: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('waiting_room') }})
    wheelchair: Optional[shared_v3_stopaccessibilitywheelchair.V3StopAccessibilityWheelchair] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('wheelchair') }})
    
