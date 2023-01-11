import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import businesshourinputmodel as shared_businesshourinputmodel


@dataclass_json
@dataclasses.dataclass
class BusinessHoursUpdateModel:
    fri: Optional[shared_businesshourinputmodel.BusinessHourInputModel] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fri') }})
    mon: Optional[shared_businesshourinputmodel.BusinessHourInputModel] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mon') }})
    sat: Optional[shared_businesshourinputmodel.BusinessHourInputModel] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sat') }})
    sun: Optional[shared_businesshourinputmodel.BusinessHourInputModel] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sun') }})
    thu: Optional[shared_businesshourinputmodel.BusinessHourInputModel] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('thu') }})
    tue: Optional[shared_businesshourinputmodel.BusinessHourInputModel] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tue') }})
    wed: Optional[shared_businesshourinputmodel.BusinessHourInputModel] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('wed') }})
    
