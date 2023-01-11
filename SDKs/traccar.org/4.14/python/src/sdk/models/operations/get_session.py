import dataclasses
from typing import Optional
from ..shared import user as shared_user


@dataclasses.dataclass
class GetSessionQueryParams:
    token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'token', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetSessionRequest:
    query_params: GetSessionQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetSessionResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    user: Optional[shared_user.User] = dataclasses.field(default=None)
    
