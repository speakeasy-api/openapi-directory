import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import basic_error as shared_basic_error


@dataclass_json
@dataclasses.dataclass
class ActivityMarkNotificationsAsReadRequestBody:
    last_read_at: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('last_read_at'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    read: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('read') }})
    

@dataclass_json
@dataclasses.dataclass
class ActivityMarkNotificationsAsRead202ApplicationJSON:
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclasses.dataclass
class ActivityMarkNotificationsAsReadRequest:
    request: Optional[ActivityMarkNotificationsAsReadRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class ActivityMarkNotificationsAsReadResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    activity_mark_notifications_as_read_202_application_json_object: Optional[ActivityMarkNotificationsAsRead202ApplicationJSON] = dataclasses.field(default=None)
    basic_error: Optional[shared_basic_error.BasicError] = dataclasses.field(default=None)
    
