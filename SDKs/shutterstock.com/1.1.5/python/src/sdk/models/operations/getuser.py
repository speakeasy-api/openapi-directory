import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import userdetails as shared_userdetails


@dataclasses.dataclass
class GetUserSecurity:
    customer_access_code: shared_security.SchemeCustomerAccessCode = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class GetUserRequest:
    security: GetUserSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetUserResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    user_details: Optional[shared_userdetails.UserDetails] = dataclasses.field(default=None)
    
