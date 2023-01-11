import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import monetary as shared_monetary
from ..shared import project as shared_project

class CommissionStatusEnum(str, Enum):
    COMPLETED = "completed"
    UNCLAIMED = "unclaimed"
    FAILED = "failed"
    SENT = "sent"
    WAITING = "waiting"
    WAITING_INVOICE = "waiting_invoice"


@dataclass_json
@dataclasses.dataclass
class Commission:
    amount: Optional[shared_monetary.Monetary] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('amount') }})
    date_: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('date'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    project: Optional[shared_project.Project] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('project') }})
    status: Optional[CommissionStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    
