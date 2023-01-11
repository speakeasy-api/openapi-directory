import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security
from ..shared import ip_messaging_v1_service_channel_invite as shared_ip_messaging_v1_service_channel_invite


LIST_INVITE_SERVERS = [
	"https://ip-messaging.twilio.com",
]


@dataclasses.dataclass
class ListInvitePathParams:
    channel_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'ChannelSid', 'style': 'simple', 'explode': False }})
    service_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ListInviteQueryParams:
    identity: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'Identity', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ListInviteSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass_json
@dataclasses.dataclass
class ListInviteListInviteResponseMeta:
    first_page_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('first_page_url') }})
    key: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    next_page_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next_page_url') }})
    page: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page') }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page_size') }})
    previous_page_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous_page_url') }})
    url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass_json
@dataclasses.dataclass
class ListInviteListInviteResponse:
    invites: Optional[list[shared_ip_messaging_v1_service_channel_invite.IPMessagingV1ServiceChannelInvite]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('invites') }})
    meta: Optional[ListInviteListInviteResponseMeta] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    

@dataclasses.dataclass
class ListInviteRequest:
    path_params: ListInvitePathParams = dataclasses.field()
    query_params: ListInviteQueryParams = dataclasses.field()
    security: ListInviteSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class ListInviteResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    list_invite_response: Optional[ListInviteListInviteResponse] = dataclasses.field(default=None)
    
