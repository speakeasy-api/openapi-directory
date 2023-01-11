import dataclasses
from typing import Any,Optional
from ..shared import security as shared_security
from ..shared import preview_marketplace_installed_add_on as shared_preview_marketplace_installed_add_on


CREATE_MARKETPLACE_INSTALLED_ADD_ON_SERVERS = [
	"https://preview.twilio.com",
]


@dataclasses.dataclass
class CreateMarketplaceInstalledAddOnCreateMarketplaceInstalledAddOnRequest:
    accept_terms_of_service: bool = dataclasses.field(metadata={'form': { 'field_name': 'AcceptTermsOfService' }})
    available_add_on_sid: str = dataclasses.field(metadata={'form': { 'field_name': 'AvailableAddOnSid' }})
    configuration: Optional[Any] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'Configuration' }})
    unique_name: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'UniqueName' }})
    

@dataclasses.dataclass
class CreateMarketplaceInstalledAddOnSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class CreateMarketplaceInstalledAddOnRequest:
    security: CreateMarketplaceInstalledAddOnSecurity = dataclasses.field()
    request: Optional[CreateMarketplaceInstalledAddOnCreateMarketplaceInstalledAddOnRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class CreateMarketplaceInstalledAddOnResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    preview_marketplace_installed_add_on: Optional[shared_preview_marketplace_installed_add_on.PreviewMarketplaceInstalledAddOn] = dataclasses.field(default=None)
    
