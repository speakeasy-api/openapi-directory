import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class ConvertResponse:
    from_type: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('fromType') }})
    from_value: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('fromValue') }})
    result: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('result') }})
    result_float: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('resultFloat') }})
    to_type: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('toType') }})
    valid: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('valid') }})
    
