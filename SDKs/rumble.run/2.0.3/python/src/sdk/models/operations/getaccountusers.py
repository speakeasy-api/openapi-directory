import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import user as shared_user


@dataclasses.dataclass
class GetAccountUsersSecurity:
    bearer_auth: shared_security.SchemeBearerAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclasses.dataclass
class GetAccountUsersRequest:
    security: GetAccountUsersSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetAccountUsersResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    users: Optional[list[shared_user.User]] = dataclasses.field(default=None)
    
