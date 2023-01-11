import dataclasses
from typing import Optional
from enum import Enum

class PasswordGrantTypeEnum(str, Enum):
    PASSWORD = "password"


@dataclasses.dataclass
class Password:
    client_id: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'client_id' }})
    client_secret: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'client_secret' }})
    grant_type: Optional[PasswordGrantTypeEnum] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'grant_type' }})
    password: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'password' }})
    redirect_uri: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'redirect_uri' }})
    user_name: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'user_name' }})
    
