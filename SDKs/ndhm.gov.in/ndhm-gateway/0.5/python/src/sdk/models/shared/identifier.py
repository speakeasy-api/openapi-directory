import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import identifiertype_enum as shared_identifiertype_enum


@dataclass_json
@dataclasses.dataclass
class Identifier:
    type: Optional[shared_identifiertype_enum.IdentifierTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    value: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    
