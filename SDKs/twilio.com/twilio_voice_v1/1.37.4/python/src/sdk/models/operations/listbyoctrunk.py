import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security
from ..shared import voice_v1_byoc_trunk as shared_voice_v1_byoc_trunk


LIST_BYOC_TRUNK_SERVERS = [
	"https://voice.twilio.com",
]


@dataclasses.dataclass
class ListByocTrunkQueryParams:
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ListByocTrunkSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass_json
@dataclasses.dataclass
class ListByocTrunkListByocTrunkResponseMeta:
    first_page_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('first_page_url') }})
    key: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    next_page_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next_page_url') }})
    page: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page') }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page_size') }})
    previous_page_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous_page_url') }})
    url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass_json
@dataclasses.dataclass
class ListByocTrunkListByocTrunkResponse:
    byoc_trunks: Optional[list[shared_voice_v1_byoc_trunk.VoiceV1ByocTrunk]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('byoc_trunks') }})
    meta: Optional[ListByocTrunkListByocTrunkResponseMeta] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    

@dataclasses.dataclass
class ListByocTrunkRequest:
    query_params: ListByocTrunkQueryParams = dataclasses.field()
    security: ListByocTrunkSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class ListByocTrunkResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    list_byoc_trunk_response: Optional[ListByocTrunkListByocTrunkResponse] = dataclasses.field(default=None)
    
