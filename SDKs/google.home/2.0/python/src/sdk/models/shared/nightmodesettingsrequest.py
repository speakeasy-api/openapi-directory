import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import window as shared_window


@dataclass_json
@dataclasses.dataclass
class NightModesettingsRequest:
    demo_to_user: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('demo_to_user') }})
    do_not_disturb: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('do_not_disturb') }})
    enabled: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('enabled') }})
    led_brightness: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('led_brightness') }})
    volume: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('volume') }})
    windows: list[shared_window.Window] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('windows') }})
    
