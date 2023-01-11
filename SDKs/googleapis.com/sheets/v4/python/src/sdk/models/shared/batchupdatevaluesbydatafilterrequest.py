import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import datafiltervaluerange as shared_datafiltervaluerange

class BatchUpdateValuesByDataFilterRequestResponseDateTimeRenderOptionEnum(str, Enum):
    SERIAL_NUMBER = "SERIAL_NUMBER"
    FORMATTED_STRING = "FORMATTED_STRING"

class BatchUpdateValuesByDataFilterRequestResponseValueRenderOptionEnum(str, Enum):
    FORMATTED_VALUE = "FORMATTED_VALUE"
    UNFORMATTED_VALUE = "UNFORMATTED_VALUE"
    FORMULA = "FORMULA"

class BatchUpdateValuesByDataFilterRequestValueInputOptionEnum(str, Enum):
    INPUT_VALUE_OPTION_UNSPECIFIED = "INPUT_VALUE_OPTION_UNSPECIFIED"
    RAW = "RAW"
    USER_ENTERED = "USER_ENTERED"


@dataclass_json
@dataclasses.dataclass
class BatchUpdateValuesByDataFilterRequest:
    r"""BatchUpdateValuesByDataFilterRequest
    The request for updating more than one range of values in a spreadsheet.
    """
    
    data: Optional[list[shared_datafiltervaluerange.DataFilterValueRange]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    include_values_in_response: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('includeValuesInResponse') }})
    response_date_time_render_option: Optional[BatchUpdateValuesByDataFilterRequestResponseDateTimeRenderOptionEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('responseDateTimeRenderOption') }})
    response_value_render_option: Optional[BatchUpdateValuesByDataFilterRequestResponseValueRenderOptionEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('responseValueRenderOption') }})
    value_input_option: Optional[BatchUpdateValuesByDataFilterRequestValueInputOptionEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('valueInputOption') }})
    
