import dataclasses
from typing import Optional


@dataclasses.dataclass
class SchemeHTTPBearer:
    authorization: str = dataclasses.field(metadata={'security': { 'field_name': 'Authorization' }})
    

@dataclasses.dataclass
class SchemeAccessToken:
    api_key: str = dataclasses.field(metadata={'security': { 'field_name': 'access-token' }})
    

@dataclasses.dataclass
class Security:
    access_token: Optional[SchemeAccessToken] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'query' }})
    http_bearer: Optional[SchemeHTTPBearer] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    
