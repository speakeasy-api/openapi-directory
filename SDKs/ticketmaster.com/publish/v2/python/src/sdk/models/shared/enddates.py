import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import localtime as shared_localtime


@dataclass_json
@dataclasses.dataclass
class EndDates:
    r"""EndDates
    Event's End Dates
    """
    
    approximate: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('approximate') }})
    date_time: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dateTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    local_time: Optional[shared_localtime.LocalTime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('localTime') }})
    
