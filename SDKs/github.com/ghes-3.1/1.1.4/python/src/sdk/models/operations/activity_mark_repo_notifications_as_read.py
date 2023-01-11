import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class ActivityMarkRepoNotificationsAsReadPathParams:
    owner: str = dataclasses.field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = dataclasses.field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class ActivityMarkRepoNotificationsAsReadRequestBody:
    last_read_at: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('last_read_at'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    

@dataclass_json
@dataclasses.dataclass
class ActivityMarkRepoNotificationsAsRead202ApplicationJSON:
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclasses.dataclass
class ActivityMarkRepoNotificationsAsReadRequest:
    path_params: ActivityMarkRepoNotificationsAsReadPathParams = dataclasses.field()
    request: Optional[ActivityMarkRepoNotificationsAsReadRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class ActivityMarkRepoNotificationsAsReadResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    activity_mark_repo_notifications_as_read_202_application_json_object: Optional[ActivityMarkRepoNotificationsAsRead202ApplicationJSON] = dataclasses.field(default=None)
    
