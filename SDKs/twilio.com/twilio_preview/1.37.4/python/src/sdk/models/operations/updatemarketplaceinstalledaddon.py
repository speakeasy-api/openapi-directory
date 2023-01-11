import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from ..shared import security as shared_security
from ..shared import preview_marketplace_installed_add_on as shared_preview_marketplace_installed_add_on


UPDATE_MARKETPLACE_INSTALLED_ADD_ON_SERVERS = [
	"https://preview.twilio.com",
]


@dataclasses.dataclass
class UpdateMarketplaceInstalledAddOnPathParams:
    sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UpdateMarketplaceInstalledAddOnUpdateMarketplaceInstalledAddOnRequest:
    configuration: Optional[Any] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'Configuration' }})
    unique_name: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'UniqueName' }})
    

@dataclasses.dataclass
class UpdateMarketplaceInstalledAddOnSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class UpdateMarketplaceInstalledAddOnRequest:
    path_params: UpdateMarketplaceInstalledAddOnPathParams = dataclasses.field()
    security: UpdateMarketplaceInstalledAddOnSecurity = dataclasses.field()
    request: Optional[UpdateMarketplaceInstalledAddOnUpdateMarketplaceInstalledAddOnRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class UpdateMarketplaceInstalledAddOnResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    preview_marketplace_installed_add_on: Optional[shared_preview_marketplace_installed_add_on.PreviewMarketplaceInstalledAddOn] = dataclasses.field(default=None)
    
