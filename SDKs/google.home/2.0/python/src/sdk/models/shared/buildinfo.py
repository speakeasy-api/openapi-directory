import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class BuildInfo:
    build_type: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('build_type') }})
    cast_build_revision: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('cast_build_revision') }})
    cast_control_version: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('cast_control_version') }})
    preview_channel_state: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('preview_channel_state') }})
    release_track: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('release_track') }})
    system_build_number: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('system_build_number') }})
    
