import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import datetimezone as shared_datetimezone


@dataclass_json
@dataclasses.dataclass
class Chronology:
    zone: Optional[shared_datetimezone.DateTimeZone] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('zone') }})
    
