import dataclasses
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class EntryPointParameterTypeEnum(str, Enum):
    QUERY = "query"
    HEADER = "header"
    URI = "uri"
    PATH = "path"
    BODY = "body"


@dataclass_json
@dataclasses.dataclass
class EntryPointParameter:
    description: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    display_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('display_name') }})
    parameter_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('parameter_name') }})
    permitted_values: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('permitted_values') }})
    required: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('required') }})
    type: EntryPointParameterTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
