import dataclasses
from typing import Optional


@dataclasses.dataclass
class DeleteOauthV1RefreshTokensTokenArchiveRefreshTokenPathParams:
    token: str = dataclasses.field(metadata={'path_param': { 'field_name': 'token', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteOauthV1RefreshTokensTokenArchiveRefreshTokenRequest:
    path_params: DeleteOauthV1RefreshTokensTokenArchiveRefreshTokenPathParams = dataclasses.field()
    

@dataclasses.dataclass
class DeleteOauthV1RefreshTokensTokenArchiveRefreshTokenResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    
