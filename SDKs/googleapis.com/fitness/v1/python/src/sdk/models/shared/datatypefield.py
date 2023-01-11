import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class DataTypeFieldFormatEnum(str, Enum):
    INTEGER = "integer"
    FLOAT_POINT = "floatPoint"
    STRING = "string"
    MAP = "map"
    INTEGER_LIST = "integerList"
    FLOAT_LIST = "floatList"
    BLOB = "blob"


@dataclass_json
@dataclasses.dataclass
class DataTypeField:
    r"""DataTypeField
    In case of multi-dimensional data (such as an accelerometer with x, y, and z axes) each field represents one dimension. Each data type field has a unique name which identifies it. The field also defines the format of the data (int, float, etc.). This message is only instantiated in code and not used for wire comms or stored in any way.
    """
    
    format: Optional[DataTypeFieldFormatEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('format') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    optional: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('optional') }})
    
