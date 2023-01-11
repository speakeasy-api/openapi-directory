import dataclasses
from typing import Optional
from enum import Enum

class RefreshTokenGrantTypeEnum(str, Enum):
    REFRESH_TOKEN = "refresh_token"


@dataclasses.dataclass
class RefreshToken:
    client_id: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'client_id' }})
    client_secret: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'client_secret' }})
    grant_type: Optional[RefreshTokenGrantTypeEnum] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'grant_type' }})
    redirect_uri: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'redirect_uri' }})
    refresh_token: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'refresh_token' }})
    
