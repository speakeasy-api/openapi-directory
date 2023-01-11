import dataclasses
from typing import Optional
from enum import Enum

class AuthorizationCodeGrantTypeEnum(str, Enum):
    AUTHORIZATION_CODE = "authorization_code"
    CLIENT_CREDENTIALS = "client_credentials"


@dataclasses.dataclass
class AuthorizationCode:
    authorization_code: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'authorization_code' }})
    client_id: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'client_id' }})
    client_secret: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'client_secret' }})
    grant_type: Optional[AuthorizationCodeGrantTypeEnum] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'grant_type' }})
    redirect_uri: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'redirect_uri' }})
    
