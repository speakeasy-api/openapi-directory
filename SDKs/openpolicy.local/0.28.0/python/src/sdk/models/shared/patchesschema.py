import dataclasses
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class PatchesSchemaOpEnum(str, Enum):
    ADD = "add"
    REMOVE = "remove"
    REPLACE = "replace"
    MOVE = "move"
    COPY = "copy"
    TEST = "test"


@dataclass_json
@dataclasses.dataclass
class PatchesSchema:
    r"""PatchesSchema
    A JSON patch operation
    """
    
    op: PatchesSchemaOpEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('op') }})
    path: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('path') }})
    value: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    
