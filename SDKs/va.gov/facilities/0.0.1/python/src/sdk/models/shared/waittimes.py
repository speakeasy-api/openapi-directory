import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import patientwaittime as shared_patientwaittime


@dataclass_json
@dataclasses.dataclass
class WaitTimes:
    effective_date: Optional[date] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('effective_date'), 'encoder': utils.dateisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    health: Optional[list[shared_patientwaittime.PatientWaitTime]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('health') }})
    
