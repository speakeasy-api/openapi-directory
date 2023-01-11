import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import error as shared_error

class HeartbeatResponseStatusEnum(str, Enum):
    UP = "UP"
    DOWN = "DOWN"


@dataclass_json
@dataclasses.dataclass
class HeartbeatResponse:
    status: HeartbeatResponseStatusEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    timestamp: datetime = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('timestamp'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    error: Optional[shared_error.Error] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    
