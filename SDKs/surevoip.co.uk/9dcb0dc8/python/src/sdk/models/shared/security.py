import dataclasses
from typing import Optional


@dataclasses.dataclass
class SchemeBasicAuth:
    password: str = dataclasses.field(metadata={'security': { 'field_name': 'password' }})
    username: str = dataclasses.field(metadata={'security': { 'field_name': 'username' }})
    

@dataclasses.dataclass
class SchemeOAuth2:
    authorization: str = dataclasses.field(metadata={'security': { 'field_name': 'Authorization' }})
    

@dataclasses.dataclass
class Security:
    basic_auth: Optional[SchemeBasicAuth] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    o_auth2: Optional[SchemeOAuth2] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class SchemeOpenIDConnect:
    authorization: str = dataclasses.field(metadata={'security': { 'field_name': 'Authorization' }})
    
