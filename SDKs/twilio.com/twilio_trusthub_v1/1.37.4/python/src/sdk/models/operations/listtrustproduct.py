import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import trust_product_enum_status_enum as shared_trust_product_enum_status_enum
from ..shared import security as shared_security
from ..shared import trusthub_v1_trust_product as shared_trusthub_v1_trust_product


LIST_TRUST_PRODUCT_SERVERS = [
	"https://trusthub.twilio.com",
]


@dataclasses.dataclass
class ListTrustProductQueryParams:
    friendly_name: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'FriendlyName', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    policy_sid: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'PolicySid', 'style': 'form', 'explode': True }})
    status: Optional[shared_trust_product_enum_status_enum.TrustProductEnumStatusEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'Status', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ListTrustProductSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass_json
@dataclasses.dataclass
class ListTrustProductListTrustProductResponseMeta:
    first_page_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('first_page_url') }})
    key: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    next_page_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next_page_url') }})
    page: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page') }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page_size') }})
    previous_page_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous_page_url') }})
    url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass_json
@dataclasses.dataclass
class ListTrustProductListTrustProductResponse:
    meta: Optional[ListTrustProductListTrustProductResponseMeta] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    results: Optional[list[shared_trusthub_v1_trust_product.TrusthubV1TrustProduct]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('results') }})
    

@dataclasses.dataclass
class ListTrustProductRequest:
    query_params: ListTrustProductQueryParams = dataclasses.field()
    security: ListTrustProductSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class ListTrustProductResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    list_trust_product_response: Optional[ListTrustProductListTrustProductResponse] = dataclasses.field(default=None)
    
