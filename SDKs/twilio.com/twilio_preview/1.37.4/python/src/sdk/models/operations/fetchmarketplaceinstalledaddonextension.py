import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import preview_marketplace_installed_add_on_installed_add_on_extension as shared_preview_marketplace_installed_add_on_installed_add_on_extension


FETCH_MARKETPLACE_INSTALLED_ADD_ON_EXTENSION_SERVERS = [
	"https://preview.twilio.com",
]


@dataclasses.dataclass
class FetchMarketplaceInstalledAddOnExtensionPathParams:
    installed_add_on_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'InstalledAddOnSid', 'style': 'simple', 'explode': False }})
    sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class FetchMarketplaceInstalledAddOnExtensionSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class FetchMarketplaceInstalledAddOnExtensionRequest:
    path_params: FetchMarketplaceInstalledAddOnExtensionPathParams = dataclasses.field()
    security: FetchMarketplaceInstalledAddOnExtensionSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class FetchMarketplaceInstalledAddOnExtensionResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    preview_marketplace_installed_add_on_installed_add_on_extension: Optional[shared_preview_marketplace_installed_add_on_installed_add_on_extension.PreviewMarketplaceInstalledAddOnInstalledAddOnExtension] = dataclasses.field(default=None)
    
