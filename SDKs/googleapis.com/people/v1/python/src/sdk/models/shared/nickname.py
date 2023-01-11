import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import fieldmetadata as shared_fieldmetadata
from ..shared import fieldmetadata as shared_fieldmetadata

class NicknameTypeEnum(str, Enum):
    DEFAULT = "DEFAULT"
    MAIDEN_NAME = "MAIDEN_NAME"
    INITIALS = "INITIALS"
    GPLUS = "GPLUS"
    OTHER_NAME = "OTHER_NAME"
    ALTERNATE_NAME = "ALTERNATE_NAME"
    SHORT_NAME = "SHORT_NAME"


@dataclass_json
@dataclasses.dataclass
class Nickname:
    r"""Nickname
    A person's nickname.
    """
    
    metadata: Optional[shared_fieldmetadata.FieldMetadata] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metadata') }})
    type: Optional[NicknameTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    value: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    

@dataclass_json
@dataclasses.dataclass
class NicknameInput:
    r"""NicknameInput
    A person's nickname.
    """
    
    metadata: Optional[shared_fieldmetadata.FieldMetadataInput] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metadata') }})
    type: Optional[NicknameTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    value: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    
