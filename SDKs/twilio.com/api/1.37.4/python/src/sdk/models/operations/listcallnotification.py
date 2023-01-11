import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security
from ..shared import api_v2010_account_call_call_notification as shared_api_v2010_account_call_call_notification


LIST_CALL_NOTIFICATION_SERVERS = [
	"https://api.twilio.com",
]


@dataclasses.dataclass
class ListCallNotificationPathParams:
    account_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'AccountSid', 'style': 'simple', 'explode': False }})
    call_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'CallSid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ListCallNotificationQueryParams:
    log: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'Log', 'style': 'form', 'explode': True }})
    message_date: Optional[date] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'MessageDate', 'style': 'form', 'explode': True }})
    message_date_less_than_: Optional[date] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'MessageDate<', 'style': 'form', 'explode': True }})
    message_date_greater_than_: Optional[date] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'MessageDate>', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ListCallNotificationSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass_json
@dataclasses.dataclass
class ListCallNotificationListCallNotificationResponse:
    end: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('end') }})
    first_page_uri: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('first_page_uri') }})
    next_page_uri: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next_page_uri') }})
    notifications: Optional[list[shared_api_v2010_account_call_call_notification.APIV2010AccountCallCallNotification]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('notifications') }})
    page: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page') }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page_size') }})
    previous_page_uri: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous_page_uri') }})
    start: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('start') }})
    uri: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclasses.dataclass
class ListCallNotificationRequest:
    path_params: ListCallNotificationPathParams = dataclasses.field()
    query_params: ListCallNotificationQueryParams = dataclasses.field()
    security: ListCallNotificationSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class ListCallNotificationResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    list_call_notification_response: Optional[ListCallNotificationListCallNotificationResponse] = dataclasses.field(default=None)
    
