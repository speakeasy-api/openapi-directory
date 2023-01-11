import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security
from ..shared import api_v2010_account_message as shared_api_v2010_account_message


LIST_MESSAGE_SERVERS = [
	"https://api.twilio.com",
]


@dataclasses.dataclass
class ListMessagePathParams:
    account_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'AccountSid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ListMessageQueryParams:
    date_sent: Optional[datetime] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'DateSent', 'style': 'form', 'explode': True }})
    date_sent_less_than_: Optional[datetime] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'DateSent<', 'style': 'form', 'explode': True }})
    date_sent_greater_than_: Optional[datetime] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'DateSent>', 'style': 'form', 'explode': True }})
    from_: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'From', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    to: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'To', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ListMessageSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass_json
@dataclasses.dataclass
class ListMessageListMessageResponse:
    end: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('end') }})
    first_page_uri: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('first_page_uri') }})
    messages: Optional[list[shared_api_v2010_account_message.APIV2010AccountMessage]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('messages') }})
    next_page_uri: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next_page_uri') }})
    page: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page') }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page_size') }})
    previous_page_uri: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous_page_uri') }})
    start: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('start') }})
    uri: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclasses.dataclass
class ListMessageRequest:
    path_params: ListMessagePathParams = dataclasses.field()
    query_params: ListMessageQueryParams = dataclasses.field()
    security: ListMessageSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class ListMessageResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    list_message_response: Optional[ListMessageListMessageResponse] = dataclasses.field(default=None)
    
