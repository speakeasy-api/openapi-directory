import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import fieldmetadata as shared_fieldmetadata
from ..shared import fieldmetadata as shared_fieldmetadata

class MiscKeywordTypeEnum(str, Enum):
    TYPE_UNSPECIFIED = "TYPE_UNSPECIFIED"
    OUTLOOK_BILLING_INFORMATION = "OUTLOOK_BILLING_INFORMATION"
    OUTLOOK_DIRECTORY_SERVER = "OUTLOOK_DIRECTORY_SERVER"
    OUTLOOK_KEYWORD = "OUTLOOK_KEYWORD"
    OUTLOOK_MILEAGE = "OUTLOOK_MILEAGE"
    OUTLOOK_PRIORITY = "OUTLOOK_PRIORITY"
    OUTLOOK_SENSITIVITY = "OUTLOOK_SENSITIVITY"
    OUTLOOK_SUBJECT = "OUTLOOK_SUBJECT"
    OUTLOOK_USER = "OUTLOOK_USER"
    HOME = "HOME"
    WORK = "WORK"
    OTHER = "OTHER"


@dataclass_json
@dataclasses.dataclass
class MiscKeyword:
    r"""MiscKeyword
    A person's miscellaneous keyword.
    """
    
    formatted_type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('formattedType') }})
    metadata: Optional[shared_fieldmetadata.FieldMetadata] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metadata') }})
    type: Optional[MiscKeywordTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    value: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    

@dataclass_json
@dataclasses.dataclass
class MiscKeywordInput:
    r"""MiscKeywordInput
    A person's miscellaneous keyword.
    """
    
    metadata: Optional[shared_fieldmetadata.FieldMetadataInput] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metadata') }})
    type: Optional[MiscKeywordTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    value: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    
