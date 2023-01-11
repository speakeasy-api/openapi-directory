import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import media_processor_enum_order_enum as shared_media_processor_enum_order_enum
from ..shared import media_processor_enum_status_enum as shared_media_processor_enum_status_enum
from ..shared import security as shared_security
from ..shared import media_v1_media_processor as shared_media_v1_media_processor


LIST_MEDIA_PROCESSOR_SERVERS = [
	"https://media.twilio.com",
]


@dataclasses.dataclass
class ListMediaProcessorQueryParams:
    order: Optional[shared_media_processor_enum_order_enum.MediaProcessorEnumOrderEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'Order', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    status: Optional[shared_media_processor_enum_status_enum.MediaProcessorEnumStatusEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'Status', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ListMediaProcessorSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass_json
@dataclasses.dataclass
class ListMediaProcessorListMediaProcessorResponseMeta:
    first_page_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('first_page_url') }})
    key: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    next_page_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next_page_url') }})
    page: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page') }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page_size') }})
    previous_page_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous_page_url') }})
    url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass_json
@dataclasses.dataclass
class ListMediaProcessorListMediaProcessorResponse:
    media_processors: Optional[list[shared_media_v1_media_processor.MediaV1MediaProcessor]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('media_processors') }})
    meta: Optional[ListMediaProcessorListMediaProcessorResponseMeta] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    

@dataclasses.dataclass
class ListMediaProcessorRequest:
    query_params: ListMediaProcessorQueryParams = dataclasses.field()
    security: ListMediaProcessorSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class ListMediaProcessorResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    list_media_processor_response: Optional[ListMediaProcessorListMediaProcessorResponse] = dataclasses.field(default=None)
    
