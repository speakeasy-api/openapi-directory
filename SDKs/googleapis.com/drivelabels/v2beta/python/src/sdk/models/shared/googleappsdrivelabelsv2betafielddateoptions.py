import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googletypedate as shared_googletypedate

class GoogleAppsDriveLabelsV2betaFieldDateOptionsDateFormatTypeEnum(str, Enum):
    DATE_FORMAT_UNSPECIFIED = "DATE_FORMAT_UNSPECIFIED"
    LONG_DATE = "LONG_DATE"
    SHORT_DATE = "SHORT_DATE"


@dataclass_json
@dataclasses.dataclass
class GoogleAppsDriveLabelsV2betaFieldDateOptions:
    r"""GoogleAppsDriveLabelsV2betaFieldDateOptions
    Options for the date field type.
    """
    
    date_format: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dateFormat') }})
    date_format_type: Optional[GoogleAppsDriveLabelsV2betaFieldDateOptionsDateFormatTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dateFormatType') }})
    max_value: Optional[shared_googletypedate.GoogleTypeDate] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxValue') }})
    min_value: Optional[shared_googletypedate.GoogleTypeDate] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('minValue') }})
    

@dataclass_json
@dataclasses.dataclass
class GoogleAppsDriveLabelsV2betaFieldDateOptionsInput:
    r"""GoogleAppsDriveLabelsV2betaFieldDateOptionsInput
    Options for the date field type.
    """
    
    date_format_type: Optional[GoogleAppsDriveLabelsV2betaFieldDateOptionsDateFormatTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dateFormatType') }})
    max_value: Optional[shared_googletypedate.GoogleTypeDate] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxValue') }})
    min_value: Optional[shared_googletypedate.GoogleTypeDate] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('minValue') }})
    
