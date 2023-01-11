import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security
from ..shared import api_v2010_account_notification as shared_api_v2010_account_notification


LIST_NOTIFICATION_SERVERS = [
	"https://api.twilio.com",
]


@dataclasses.dataclass
class ListNotificationPathParams:
    account_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'AccountSid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ListNotificationQueryParams:
    log: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'Log', 'style': 'form', 'explode': True }})
    message_date: Optional[date] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'MessageDate', 'style': 'form', 'explode': True }})
    message_date_less_than_: Optional[date] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'MessageDate<', 'style': 'form', 'explode': True }})
    message_date_greater_than_: Optional[date] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'MessageDate>', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ListNotificationSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass_json
@dataclasses.dataclass
class ListNotificationListNotificationResponse:
    end: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('end') }})
    first_page_uri: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('first_page_uri') }})
    next_page_uri: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next_page_uri') }})
    notifications: Optional[list[shared_api_v2010_account_notification.APIV2010AccountNotification]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('notifications') }})
    page: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page') }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page_size') }})
    previous_page_uri: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous_page_uri') }})
    start: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('start') }})
    uri: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclasses.dataclass
class ListNotificationRequest:
    path_params: ListNotificationPathParams = dataclasses.field()
    query_params: ListNotificationQueryParams = dataclasses.field()
    security: ListNotificationSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class ListNotificationResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    list_notification_response: Optional[ListNotificationListNotificationResponse] = dataclasses.field(default=None)
    
