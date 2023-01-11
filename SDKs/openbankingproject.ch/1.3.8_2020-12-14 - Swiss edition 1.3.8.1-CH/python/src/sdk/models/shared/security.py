import dataclasses
from typing import Optional


@dataclasses.dataclass
class SchemeBearerAuthOAuth:
    authorization: str = dataclasses.field(metadata={'security': { 'field_name': 'Authorization' }})
    

@dataclasses.dataclass
class Security:
    bearer_auth_o_auth: Optional[SchemeBearerAuthOAuth] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    
