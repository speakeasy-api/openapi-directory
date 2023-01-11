import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security
from ..shared import preview_marketplace_installed_add_on as shared_preview_marketplace_installed_add_on


LIST_MARKETPLACE_INSTALLED_ADD_ON_SERVERS = [
	"https://preview.twilio.com",
]


@dataclasses.dataclass
class ListMarketplaceInstalledAddOnQueryParams:
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ListMarketplaceInstalledAddOnSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass_json
@dataclasses.dataclass
class ListMarketplaceInstalledAddOnListMarketplaceInstalledAddOnResponseMeta:
    first_page_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('first_page_url') }})
    key: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    next_page_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next_page_url') }})
    page: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page') }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page_size') }})
    previous_page_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous_page_url') }})
    url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass_json
@dataclasses.dataclass
class ListMarketplaceInstalledAddOnListMarketplaceInstalledAddOnResponse:
    installed_add_ons: Optional[list[shared_preview_marketplace_installed_add_on.PreviewMarketplaceInstalledAddOn]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('installed_add_ons') }})
    meta: Optional[ListMarketplaceInstalledAddOnListMarketplaceInstalledAddOnResponseMeta] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    

@dataclasses.dataclass
class ListMarketplaceInstalledAddOnRequest:
    query_params: ListMarketplaceInstalledAddOnQueryParams = dataclasses.field()
    security: ListMarketplaceInstalledAddOnSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class ListMarketplaceInstalledAddOnResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    list_marketplace_installed_add_on_response: Optional[ListMarketplaceInstalledAddOnListMarketplaceInstalledAddOnResponse] = dataclasses.field(default=None)
    
