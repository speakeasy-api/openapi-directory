import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class OptIn1:
    opencast: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('opencast') }})
    preview_channel: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('preview_channel') }})
    remote_ducking: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('remote_ducking') }})
    stats: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('stats') }})
    
