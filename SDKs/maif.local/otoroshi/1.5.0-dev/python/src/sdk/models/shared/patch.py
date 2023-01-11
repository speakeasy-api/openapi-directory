import dataclasses
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class PatchOpEnum(str, Enum):
    ADD = "add"
    REPLACE = "replace"
    REMOVE = "remove"
    COPY = "copy"
    TEST = "test"


@dataclass_json
@dataclasses.dataclass
class Patch:
    op: PatchOpEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('op') }})
    path: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('path') }})
    value: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    
