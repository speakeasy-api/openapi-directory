import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import brand_vetting_enum_vetting_provider_enum as shared_brand_vetting_enum_vetting_provider_enum
from ..shared import security as shared_security
from ..shared import messaging_v1_brand_registrations_brand_vetting as shared_messaging_v1_brand_registrations_brand_vetting


LIST_BRAND_VETTING_SERVERS = [
	"https://messaging.twilio.com",
]


@dataclasses.dataclass
class ListBrandVettingPathParams:
    brand_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'BrandSid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ListBrandVettingQueryParams:
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    vetting_provider: Optional[shared_brand_vetting_enum_vetting_provider_enum.BrandVettingEnumVettingProviderEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'VettingProvider', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ListBrandVettingSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass_json
@dataclasses.dataclass
class ListBrandVettingListBrandVettingResponseMeta:
    first_page_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('first_page_url') }})
    key: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    next_page_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next_page_url') }})
    page: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page') }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page_size') }})
    previous_page_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous_page_url') }})
    url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass_json
@dataclasses.dataclass
class ListBrandVettingListBrandVettingResponse:
    data: Optional[list[shared_messaging_v1_brand_registrations_brand_vetting.MessagingV1BrandRegistrationsBrandVetting]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    meta: Optional[ListBrandVettingListBrandVettingResponseMeta] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    

@dataclasses.dataclass
class ListBrandVettingRequest:
    path_params: ListBrandVettingPathParams = dataclasses.field()
    query_params: ListBrandVettingQueryParams = dataclasses.field()
    security: ListBrandVettingSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class ListBrandVettingResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    list_brand_vetting_response: Optional[ListBrandVettingListBrandVettingResponse] = dataclasses.field(default=None)
    
