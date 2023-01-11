import dataclasses
from typing import Optional
from enum import Enum
from ..shared import access_token_enum_factor_types_enum as shared_access_token_enum_factor_types_enum
from ..shared import security as shared_security
from ..shared import verify_v2_service_access_token as shared_verify_v2_service_access_token


CREATE_ACCESS_TOKEN_SERVERS = [
	"https://verify.twilio.com",
]


@dataclasses.dataclass
class CreateAccessTokenPathParams:
    service_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CreateAccessTokenCreateAccessTokenRequest:
    factor_type: shared_access_token_enum_factor_types_enum.AccessTokenEnumFactorTypesEnum = dataclasses.field(metadata={'form': { 'field_name': 'FactorType' }})
    identity: str = dataclasses.field(metadata={'form': { 'field_name': 'Identity' }})
    factor_friendly_name: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'FactorFriendlyName' }})
    ttl: Optional[int] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'Ttl' }})
    

@dataclasses.dataclass
class CreateAccessTokenSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class CreateAccessTokenRequest:
    path_params: CreateAccessTokenPathParams = dataclasses.field()
    security: CreateAccessTokenSecurity = dataclasses.field()
    request: Optional[CreateAccessTokenCreateAccessTokenRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class CreateAccessTokenResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    verify_v2_service_access_token: Optional[shared_verify_v2_service_access_token.VerifyV2ServiceAccessToken] = dataclasses.field(default=None)
    
