import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security
from ..shared import voice_v1_source_ip_mapping as shared_voice_v1_source_ip_mapping


LIST_SOURCE_IP_MAPPING_SERVERS = [
	"https://voice.twilio.com",
]


@dataclasses.dataclass
class ListSourceIPMappingQueryParams:
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ListSourceIPMappingSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass_json
@dataclasses.dataclass
class ListSourceIPMappingListSourceIPMappingResponseMeta:
    first_page_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('first_page_url') }})
    key: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    next_page_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next_page_url') }})
    page: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page') }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page_size') }})
    previous_page_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous_page_url') }})
    url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass_json
@dataclasses.dataclass
class ListSourceIPMappingListSourceIPMappingResponse:
    meta: Optional[ListSourceIPMappingListSourceIPMappingResponseMeta] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    source_ip_mappings: Optional[list[shared_voice_v1_source_ip_mapping.VoiceV1SourceIPMapping]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('source_ip_mappings') }})
    

@dataclasses.dataclass
class ListSourceIPMappingRequest:
    query_params: ListSourceIPMappingQueryParams = dataclasses.field()
    security: ListSourceIPMappingSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class ListSourceIPMappingResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    list_source_ip_mapping_response: Optional[ListSourceIPMappingListSourceIPMappingResponse] = dataclasses.field(default=None)
    
