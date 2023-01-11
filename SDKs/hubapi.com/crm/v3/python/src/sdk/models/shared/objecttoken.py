import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class ObjectTokenDataTypeEnum(str, Enum):
    BOOLEAN = "BOOLEAN"
    CURRENCY = "CURRENCY"
    DATE = "DATE"
    DATETIME = "DATETIME"
    EMAIL = "EMAIL"
    LINK = "LINK"
    NUMERIC = "NUMERIC"
    STRING = "STRING"
    STATUS = "STATUS"


@dataclass_json
@dataclasses.dataclass
class ObjectToken:
    value: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    data_type: Optional[ObjectTokenDataTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataType') }})
    label: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('label') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    
