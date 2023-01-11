import dataclasses
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import displayoption as shared_displayoption

class CardDisplayPropertyDataTypeEnum(str, Enum):
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
class CardDisplayProperty:
    r"""CardDisplayProperty
    Definition for a card display property.
    """
    
    data_type: CardDisplayPropertyDataTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataType') }})
    label: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('label') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    options: list[shared_displayoption.DisplayOption] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    
