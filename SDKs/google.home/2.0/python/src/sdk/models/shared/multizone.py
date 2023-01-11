import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class Multizone:
    audio_output_delay: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('audio_output_delay') }})
    audio_output_delay_hdmi: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('audio_output_delay_hdmi') }})
    audio_output_delay_oem: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('audio_output_delay_oem') }})
    aux_in_group: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('aux_in_group') }})
    dynamic_groups: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('dynamic_groups') }})
    groups: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('groups') }})
    multichannel_status: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('multichannel_status') }})
    
