import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security
from ..shared import numbers_v2_regulatory_compliance_bundle_bundle_copy as shared_numbers_v2_regulatory_compliance_bundle_bundle_copy


LIST_BUNDLE_COPY_SERVERS = [
	"https://numbers.twilio.com",
]


@dataclasses.dataclass
class ListBundleCopyPathParams:
    bundle_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'BundleSid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ListBundleCopyQueryParams:
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ListBundleCopySecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass_json
@dataclasses.dataclass
class ListBundleCopyListBundleCopyResponseMeta:
    first_page_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('first_page_url') }})
    key: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    next_page_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next_page_url') }})
    page: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page') }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page_size') }})
    previous_page_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous_page_url') }})
    url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass_json
@dataclasses.dataclass
class ListBundleCopyListBundleCopyResponse:
    meta: Optional[ListBundleCopyListBundleCopyResponseMeta] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    results: Optional[list[shared_numbers_v2_regulatory_compliance_bundle_bundle_copy.NumbersV2RegulatoryComplianceBundleBundleCopy]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('results') }})
    

@dataclasses.dataclass
class ListBundleCopyRequest:
    path_params: ListBundleCopyPathParams = dataclasses.field()
    query_params: ListBundleCopyQueryParams = dataclasses.field()
    security: ListBundleCopySecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class ListBundleCopyResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    list_bundle_copy_response: Optional[ListBundleCopyListBundleCopyResponse] = dataclasses.field(default=None)
    
