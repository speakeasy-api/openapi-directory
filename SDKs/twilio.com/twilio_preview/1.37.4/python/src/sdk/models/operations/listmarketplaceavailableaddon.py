import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security
from ..shared import preview_marketplace_available_add_on as shared_preview_marketplace_available_add_on


LIST_MARKETPLACE_AVAILABLE_ADD_ON_SERVERS = [
	"https://preview.twilio.com",
]


@dataclasses.dataclass
class ListMarketplaceAvailableAddOnQueryParams:
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ListMarketplaceAvailableAddOnSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass_json
@dataclasses.dataclass
class ListMarketplaceAvailableAddOnListMarketplaceAvailableAddOnResponseMeta:
    first_page_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('first_page_url') }})
    key: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    next_page_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next_page_url') }})
    page: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page') }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page_size') }})
    previous_page_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous_page_url') }})
    url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass_json
@dataclasses.dataclass
class ListMarketplaceAvailableAddOnListMarketplaceAvailableAddOnResponse:
    available_add_ons: Optional[list[shared_preview_marketplace_available_add_on.PreviewMarketplaceAvailableAddOn]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('available_add_ons') }})
    meta: Optional[ListMarketplaceAvailableAddOnListMarketplaceAvailableAddOnResponseMeta] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    

@dataclasses.dataclass
class ListMarketplaceAvailableAddOnRequest:
    query_params: ListMarketplaceAvailableAddOnQueryParams = dataclasses.field()
    security: ListMarketplaceAvailableAddOnSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class ListMarketplaceAvailableAddOnResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    list_marketplace_available_add_on_response: Optional[ListMarketplaceAvailableAddOnListMarketplaceAvailableAddOnResponse] = dataclasses.field(default=None)
    
