import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import preview_marketplace_available_add_on_available_add_on_extension as shared_preview_marketplace_available_add_on_available_add_on_extension


FETCH_MARKETPLACE_AVAILABLE_ADD_ON_EXTENSION_SERVERS = [
	"https://preview.twilio.com",
]


@dataclasses.dataclass
class FetchMarketplaceAvailableAddOnExtensionPathParams:
    available_add_on_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'AvailableAddOnSid', 'style': 'simple', 'explode': False }})
    sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class FetchMarketplaceAvailableAddOnExtensionSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class FetchMarketplaceAvailableAddOnExtensionRequest:
    path_params: FetchMarketplaceAvailableAddOnExtensionPathParams = dataclasses.field()
    security: FetchMarketplaceAvailableAddOnExtensionSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class FetchMarketplaceAvailableAddOnExtensionResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    preview_marketplace_available_add_on_available_add_on_extension: Optional[shared_preview_marketplace_available_add_on_available_add_on_extension.PreviewMarketplaceAvailableAddOnAvailableAddOnExtension] = dataclasses.field(default=None)
    
