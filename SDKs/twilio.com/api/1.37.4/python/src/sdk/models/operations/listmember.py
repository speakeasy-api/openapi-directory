import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security
from ..shared import api_v2010_account_queue_member as shared_api_v2010_account_queue_member


LIST_MEMBER_SERVERS = [
	"https://api.twilio.com",
]


@dataclasses.dataclass
class ListMemberPathParams:
    account_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'AccountSid', 'style': 'simple', 'explode': False }})
    queue_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'QueueSid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ListMemberQueryParams:
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ListMemberSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass_json
@dataclasses.dataclass
class ListMemberListMemberResponse:
    end: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('end') }})
    first_page_uri: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('first_page_uri') }})
    next_page_uri: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next_page_uri') }})
    page: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page') }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page_size') }})
    previous_page_uri: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous_page_uri') }})
    queue_members: Optional[list[shared_api_v2010_account_queue_member.APIV2010AccountQueueMember]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('queue_members') }})
    start: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('start') }})
    uri: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclasses.dataclass
class ListMemberRequest:
    path_params: ListMemberPathParams = dataclasses.field()
    query_params: ListMemberQueryParams = dataclasses.field()
    security: ListMemberSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class ListMemberResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    list_member_response: Optional[ListMemberListMemberResponse] = dataclasses.field(default=None)
    
