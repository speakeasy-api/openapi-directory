import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import weekdayinputmodel as shared_weekdayinputmodel


@dataclass_json
@dataclasses.dataclass
class AvailabilityInputModel:
    fri: Optional[shared_weekdayinputmodel.WeekDayInputModel] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fri') }})
    mon: Optional[shared_weekdayinputmodel.WeekDayInputModel] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mon') }})
    sat: Optional[shared_weekdayinputmodel.WeekDayInputModel] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sat') }})
    sun: Optional[shared_weekdayinputmodel.WeekDayInputModel] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sun') }})
    thu: Optional[shared_weekdayinputmodel.WeekDayInputModel] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('thu') }})
    tue: Optional[shared_weekdayinputmodel.WeekDayInputModel] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tue') }})
    wed: Optional[shared_weekdayinputmodel.WeekDayInputModel] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('wed') }})
    
