import dataclasses
from typing import Optional


@dataclasses.dataclass
class SchemeAPIKey:
    api_key: str = dataclasses.field(metadata={'security': { 'field_name': 'apiKey' }})
    

@dataclasses.dataclass
class SchemeAccessToken:
    authorization: str = dataclasses.field(metadata={'security': { 'field_name': 'Authorization' }})
    

@dataclasses.dataclass
class Security:
    api_key: Optional[SchemeAPIKey] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'query' }})
    access_token: Optional[SchemeAccessToken] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    
