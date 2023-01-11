import dataclasses
from typing import Optional
from ..shared import refreshtokeninforesponse as shared_refreshtokeninforesponse


@dataclasses.dataclass
class GetOauthV1RefreshTokensTokenGetRefreshTokenPathParams:
    token: str = dataclasses.field(metadata={'path_param': { 'field_name': 'token', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetOauthV1RefreshTokensTokenGetRefreshTokenRequest:
    path_params: GetOauthV1RefreshTokensTokenGetRefreshTokenPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetOauthV1RefreshTokensTokenGetRefreshTokenResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    refresh_token_info_response: Optional[shared_refreshtokeninforesponse.RefreshTokenInfoResponse] = dataclasses.field(default=None)
    
