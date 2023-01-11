import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import security as shared_security
from ..shared import preview_marketplace_installed_add_on_installed_add_on_extension as shared_preview_marketplace_installed_add_on_installed_add_on_extension


UPDATE_MARKETPLACE_INSTALLED_ADD_ON_EXTENSION_SERVERS = [
	"https://preview.twilio.com",
]


@dataclasses.dataclass
class UpdateMarketplaceInstalledAddOnExtensionPathParams:
    installed_add_on_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'InstalledAddOnSid', 'style': 'simple', 'explode': False }})
    sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UpdateMarketplaceInstalledAddOnExtensionUpdateMarketplaceInstalledAddOnExtensionRequest:
    enabled: bool = dataclasses.field(metadata={'form': { 'field_name': 'Enabled' }})
    

@dataclasses.dataclass
class UpdateMarketplaceInstalledAddOnExtensionSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class UpdateMarketplaceInstalledAddOnExtensionRequest:
    path_params: UpdateMarketplaceInstalledAddOnExtensionPathParams = dataclasses.field()
    security: UpdateMarketplaceInstalledAddOnExtensionSecurity = dataclasses.field()
    request: Optional[UpdateMarketplaceInstalledAddOnExtensionUpdateMarketplaceInstalledAddOnExtensionRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class UpdateMarketplaceInstalledAddOnExtensionResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    preview_marketplace_installed_add_on_installed_add_on_extension: Optional[shared_preview_marketplace_installed_add_on_installed_add_on_extension.PreviewMarketplaceInstalledAddOnInstalledAddOnExtension] = dataclasses.field(default=None)
    
