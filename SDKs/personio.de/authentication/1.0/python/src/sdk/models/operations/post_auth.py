import dataclasses
from typing import Optional
from ..shared import authenticationtokenresponse as shared_authenticationtokenresponse


@dataclasses.dataclass
class PostAuthQueryParams:
    client_id: str = dataclasses.field(metadata={'query_param': { 'field_name': 'client_id', 'style': 'form', 'explode': True }})
    client_secret: str = dataclasses.field(metadata={'query_param': { 'field_name': 'client_secret', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class PostAuthRequest:
    query_params: PostAuthQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class PostAuthResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    authentication_token_response: Optional[shared_authenticationtokenresponse.AuthenticationTokenResponse] = dataclasses.field(default=None)
    
