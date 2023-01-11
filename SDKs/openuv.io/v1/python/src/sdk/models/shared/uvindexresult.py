import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class UvIndexResult:
    from_time: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('from_time') }})
    from_uv: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('from_uv') }})
    to_time: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('to_time') }})
    to_uv: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('to_uv') }})
    
