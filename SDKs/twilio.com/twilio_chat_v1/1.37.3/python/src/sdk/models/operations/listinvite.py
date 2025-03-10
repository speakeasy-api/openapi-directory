from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


LIST_INVITE_SERVERS = [
	"https://chat.twilio.com",
]


@dataclass
class ListInvitePathParams:
    channel_sid: str = field(metadata={'path_param': { 'field_name': 'ChannelSid', 'style': 'simple', 'explode': False }})
    service_sid: str = field(metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class ListInviteQueryParams:
    identity: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'Identity', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    

@dataclass
class ListInviteSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass_json
@dataclass
class ListInviteListInviteResponseMeta:
    first_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('first_page_url') }})
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    next_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next_page_url') }})
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page') }})
    page_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page_size') }})
    previous_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous_page_url') }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass_json
@dataclass
class ListInviteListInviteResponse:
    invites: Optional[List[shared.ChatV1ServiceChannelInvite]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('invites') }})
    meta: Optional[ListInviteListInviteResponseMeta] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    

@dataclass
class ListInviteRequest:
    path_params: ListInvitePathParams = field()
    query_params: ListInviteQueryParams = field()
    security: ListInviteSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class ListInviteResponse:
    content_type: str = field()
    status_code: int = field()
    list_invite_response: Optional[ListInviteListInviteResponse] = field(default=None)
    
