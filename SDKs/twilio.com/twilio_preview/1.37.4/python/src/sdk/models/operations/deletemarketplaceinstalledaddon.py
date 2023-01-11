import dataclasses
from typing import Optional
from ..shared import security as shared_security


DELETE_MARKETPLACE_INSTALLED_ADD_ON_SERVERS = [
	"https://preview.twilio.com",
]


@dataclasses.dataclass
class DeleteMarketplaceInstalledAddOnPathParams:
    sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteMarketplaceInstalledAddOnSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class DeleteMarketplaceInstalledAddOnRequest:
    path_params: DeleteMarketplaceInstalledAddOnPathParams = dataclasses.field()
    security: DeleteMarketplaceInstalledAddOnSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class DeleteMarketplaceInstalledAddOnResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
