import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import freebusycalendar as shared_freebusycalendar
from ..shared import freebusygroup as shared_freebusygroup


@dataclass_json
@dataclasses.dataclass
class FreeBusyResponse:
    calendars: Optional[dict[str, shared_freebusycalendar.FreeBusyCalendar]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('calendars') }})
    groups: Optional[dict[str, shared_freebusygroup.FreeBusyGroup]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('groups') }})
    kind: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    time_max: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timeMax'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    time_min: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timeMin'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
