import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security
from ..shared import voice_v1_connection_policy_connection_policy_target as shared_voice_v1_connection_policy_connection_policy_target


LIST_CONNECTION_POLICY_TARGET_SERVERS = [
	"https://voice.twilio.com",
]


@dataclasses.dataclass
class ListConnectionPolicyTargetPathParams:
    connection_policy_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'ConnectionPolicySid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ListConnectionPolicyTargetQueryParams:
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ListConnectionPolicyTargetSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass_json
@dataclasses.dataclass
class ListConnectionPolicyTargetListConnectionPolicyTargetResponseMeta:
    first_page_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('first_page_url') }})
    key: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    next_page_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next_page_url') }})
    page: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page') }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page_size') }})
    previous_page_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous_page_url') }})
    url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass_json
@dataclasses.dataclass
class ListConnectionPolicyTargetListConnectionPolicyTargetResponse:
    meta: Optional[ListConnectionPolicyTargetListConnectionPolicyTargetResponseMeta] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    targets: Optional[list[shared_voice_v1_connection_policy_connection_policy_target.VoiceV1ConnectionPolicyConnectionPolicyTarget]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('targets') }})
    

@dataclasses.dataclass
class ListConnectionPolicyTargetRequest:
    path_params: ListConnectionPolicyTargetPathParams = dataclasses.field()
    query_params: ListConnectionPolicyTargetQueryParams = dataclasses.field()
    security: ListConnectionPolicyTargetSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class ListConnectionPolicyTargetResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    list_connection_policy_target_response: Optional[ListConnectionPolicyTargetListConnectionPolicyTargetResponse] = dataclasses.field(default=None)
    
