import dataclasses
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import authconfirmidentifiertype_enum as shared_authconfirmidentifiertype_enum


@dataclass_json
@dataclasses.dataclass
class AuthConfirmIdentifier:
    type: shared_authconfirmidentifiertype_enum.AuthConfirmIdentifierTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    value: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    
