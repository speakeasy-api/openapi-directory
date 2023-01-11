import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import preview_marketplace_available_add_on as shared_preview_marketplace_available_add_on


FETCH_MARKETPLACE_AVAILABLE_ADD_ON_SERVERS = [
	"https://preview.twilio.com",
]


@dataclasses.dataclass
class FetchMarketplaceAvailableAddOnPathParams:
    sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class FetchMarketplaceAvailableAddOnSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class FetchMarketplaceAvailableAddOnRequest:
    path_params: FetchMarketplaceAvailableAddOnPathParams = dataclasses.field()
    security: FetchMarketplaceAvailableAddOnSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class FetchMarketplaceAvailableAddOnResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    preview_marketplace_available_add_on: Optional[shared_preview_marketplace_available_add_on.PreviewMarketplaceAvailableAddOn] = dataclasses.field(default=None)
    
