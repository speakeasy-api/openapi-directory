import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import accesstokendetails as shared_accesstokendetails


@dataclasses.dataclass
class GetAccessTokenSecurity:
    customer_access_code: shared_security.SchemeCustomerAccessCode = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class GetAccessTokenRequest:
    security: GetAccessTokenSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetAccessTokenResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    access_token_details: Optional[shared_accesstokendetails.AccessTokenDetails] = dataclasses.field(default=None)
    
