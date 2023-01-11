import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import esim_profile_enum_status_enum as shared_esim_profile_enum_status_enum
from ..shared import security as shared_security
from ..shared import supersim_v1_esim_profile as shared_supersim_v1_esim_profile


LIST_ESIM_PROFILE_SERVERS = [
	"https://supersim.twilio.com",
]


@dataclasses.dataclass
class ListEsimProfileQueryParams:
    eid: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'Eid', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    sim_sid: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'SimSid', 'style': 'form', 'explode': True }})
    status: Optional[shared_esim_profile_enum_status_enum.EsimProfileEnumStatusEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'Status', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ListEsimProfileSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass_json
@dataclasses.dataclass
class ListEsimProfileListEsimProfileResponseMeta:
    first_page_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('first_page_url') }})
    key: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    next_page_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next_page_url') }})
    page: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page') }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page_size') }})
    previous_page_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous_page_url') }})
    url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass_json
@dataclasses.dataclass
class ListEsimProfileListEsimProfileResponse:
    esim_profiles: Optional[list[shared_supersim_v1_esim_profile.SupersimV1EsimProfile]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('esim_profiles') }})
    meta: Optional[ListEsimProfileListEsimProfileResponseMeta] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    

@dataclasses.dataclass
class ListEsimProfileRequest:
    query_params: ListEsimProfileQueryParams = dataclasses.field()
    security: ListEsimProfileSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class ListEsimProfileResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    list_esim_profile_response: Optional[ListEsimProfileListEsimProfileResponse] = dataclasses.field(default=None)
    
