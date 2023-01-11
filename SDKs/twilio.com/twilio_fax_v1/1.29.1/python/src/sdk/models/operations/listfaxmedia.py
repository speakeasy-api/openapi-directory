import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security
from ..shared import fax_v1_fax_fax_media as shared_fax_v1_fax_fax_media


LIST_FAX_MEDIA_SERVERS = [
	"https://fax.twilio.com",
]


@dataclasses.dataclass
class ListFaxMediaPathParams:
    fax_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'FaxSid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ListFaxMediaQueryParams:
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ListFaxMediaSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass_json
@dataclasses.dataclass
class ListFaxMediaListFaxMediaResponseMeta:
    first_page_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('first_page_url') }})
    key: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    next_page_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next_page_url') }})
    page: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page') }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page_size') }})
    previous_page_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous_page_url') }})
    url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass_json
@dataclasses.dataclass
class ListFaxMediaListFaxMediaResponse:
    media: Optional[list[shared_fax_v1_fax_fax_media.FaxV1FaxFaxMedia]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('media') }})
    meta: Optional[ListFaxMediaListFaxMediaResponseMeta] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    

@dataclasses.dataclass
class ListFaxMediaRequest:
    path_params: ListFaxMediaPathParams = dataclasses.field()
    query_params: ListFaxMediaQueryParams = dataclasses.field()
    security: ListFaxMediaSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class ListFaxMediaResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    list_fax_media_response: Optional[ListFaxMediaListFaxMediaResponse] = dataclasses.field(default=None)
    
