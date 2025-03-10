from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class TrunkingV1TrunkIPAccessControlList:
    account_sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('account_sid') }})
    date_created: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('date_created'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    date_updated: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('date_updated'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    friendly_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('friendly_name') }})
    sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sid') }})
    trunk_sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('trunk_sid') }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    
