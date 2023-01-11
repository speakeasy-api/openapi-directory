import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class ProtectionResult:
    ozone: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ozone') }})
    ozone_time: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ozone_time') }})
    uv: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uv') }})
    uv_max: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uv_max') }})
    uv_max_time: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uv_max_time') }})
    uv_time: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uv_time') }})
    
