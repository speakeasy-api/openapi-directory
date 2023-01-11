import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class OptIn:
    audio_hdr: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('audio_hdr') }})
    audio_surround_mode: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('audio_surround_mode') }})
    autoplay_on_signal: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('autoplay_on_signal') }})
    cloud_ipc: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('cloud_ipc') }})
    hdmi_prefer_50hz: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('hdmi_prefer_50hz') }})
    hdmi_prefer_high_fps: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('hdmi_prefer_high_fps') }})
    managed_mode: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('managed_mode') }})
    opencast: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('opencast') }})
    preview_channel: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('preview_channel') }})
    remote_ducking: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('remote_ducking') }})
    stats: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('stats') }})
    ui_flipped: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ui_flipped') }})
    wpa3_support_enabled: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('wpa3_support_enabled') }})
    
