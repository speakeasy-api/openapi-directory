import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import gridrange as shared_gridrange

class TextToColumnsRequestDelimiterTypeEnum(str, Enum):
    DELIMITER_TYPE_UNSPECIFIED = "DELIMITER_TYPE_UNSPECIFIED"
    COMMA = "COMMA"
    SEMICOLON = "SEMICOLON"
    PERIOD = "PERIOD"
    SPACE = "SPACE"
    CUSTOM = "CUSTOM"
    AUTODETECT = "AUTODETECT"


@dataclass_json
@dataclasses.dataclass
class TextToColumnsRequest:
    r"""TextToColumnsRequest
    Splits a column of text into multiple columns, based on a delimiter in each cell.
    """
    
    delimiter: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('delimiter') }})
    delimiter_type: Optional[TextToColumnsRequestDelimiterTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('delimiterType') }})
    source: Optional[shared_gridrange.GridRange] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('source') }})
    
