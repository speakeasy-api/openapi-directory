import dataclasses
from typing import Any
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class Settings:
    closed_caption: dict[str, Any] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('closed_caption') }})
    control_notifications: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('control_notifications') }})
    country_code: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('country_code') }})
    locale: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('locale') }})
    network_standby: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('network_standby') }})
    system_sound_effects: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('system_sound_effects') }})
    time_format: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('time_format') }})
    timezone: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('timezone') }})
    wake_on_cast: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('wake_on_cast') }})
    
