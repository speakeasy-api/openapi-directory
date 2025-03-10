from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class IPMessagingV2ServiceChannelMember:
    account_sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('account_sid') }})
    attributes: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('attributes') }})
    channel_sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('channel_sid') }})
    date_created: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('date_created'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    date_updated: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('date_updated'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    identity: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('identity') }})
    last_consumed_message_index: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('last_consumed_message_index') }})
    last_consumption_timestamp: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('last_consumption_timestamp'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    role_sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('role_sid') }})
    service_sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('service_sid') }})
    sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sid') }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    
