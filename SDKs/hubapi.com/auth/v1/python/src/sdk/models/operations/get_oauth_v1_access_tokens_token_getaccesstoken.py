import dataclasses
from typing import Optional
from ..shared import accesstokeninforesponse as shared_accesstokeninforesponse


@dataclasses.dataclass
class GetOauthV1AccessTokensTokenGetAccessTokenPathParams:
    token: str = dataclasses.field(metadata={'path_param': { 'field_name': 'token', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetOauthV1AccessTokensTokenGetAccessTokenRequest:
    path_params: GetOauthV1AccessTokensTokenGetAccessTokenPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetOauthV1AccessTokensTokenGetAccessTokenResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    access_token_info_response: Optional[shared_accesstokeninforesponse.AccessTokenInfoResponse] = dataclasses.field(default=None)
    body: Optional[bytes] = dataclasses.field(default=None)
    
