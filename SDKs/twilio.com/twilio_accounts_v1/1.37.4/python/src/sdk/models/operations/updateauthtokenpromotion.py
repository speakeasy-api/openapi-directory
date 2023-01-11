import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import security as shared_security
from ..shared import accounts_v1_auth_token_promotion as shared_accounts_v1_auth_token_promotion


UPDATE_AUTH_TOKEN_PROMOTION_SERVERS = [
	"https://accounts.twilio.com",
]


@dataclasses.dataclass
class UpdateAuthTokenPromotionSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class UpdateAuthTokenPromotionRequest:
    security: UpdateAuthTokenPromotionSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class UpdateAuthTokenPromotionResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    accounts_v1_auth_token_promotion: Optional[shared_accounts_v1_auth_token_promotion.AccountsV1AuthTokenPromotion] = dataclasses.field(default=None)
    
