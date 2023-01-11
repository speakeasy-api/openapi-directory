import dataclasses
from typing import Optional
from enum import Enum
from ..shared import generateaccesstokenresponse as shared_generateaccesstokenresponse

class GenerateTokenV2RequestBodyGrantTypeEnum(str, Enum):
    URN_IETF_PARAMS_OAUTH_GRANT_TYPE_JWT_BEARER = "urn:ietf:params:oauth:grant-type:jwt-bearer"
    REFRESH_TOKEN = "refresh_token"


@dataclasses.dataclass
class GenerateTokenV2RequestBody:
    assertion: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'assertion' }})
    grant_type: Optional[GenerateTokenV2RequestBodyGrantTypeEnum] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'grant_type' }})
    refresh_token: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'refresh_token' }})
    scope: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'scope' }})
    valid_for: Optional[int] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'valid_for' }})
    

@dataclasses.dataclass
class GenerateTokenV2Request:
    request: Optional[GenerateTokenV2RequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    

@dataclasses.dataclass
class GenerateTokenV2Response:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    generate_access_token_response: Optional[shared_generateaccesstokenresponse.GenerateAccessTokenResponse] = dataclasses.field(default=None)
    
