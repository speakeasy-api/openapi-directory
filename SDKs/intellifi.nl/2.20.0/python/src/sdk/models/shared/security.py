import dataclasses
from typing import Optional


@dataclasses.dataclass
class SchemeCookieSid:
    api_key: str = dataclasses.field(metadata={'security': { 'field_name': 'brain.sid' }})
    

@dataclasses.dataclass
class SchemeHeaderAPIKey:
    api_key: str = dataclasses.field(metadata={'security': { 'field_name': 'X-Api-Key' }})
    

@dataclasses.dataclass
class SchemeQueryAPIKey:
    api_key: str = dataclasses.field(metadata={'security': { 'field_name': 'key' }})
    

@dataclasses.dataclass
class Security:
    cookie_sid: Optional[SchemeCookieSid] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'cookie' }})
    header_api_key: Optional[SchemeHeaderAPIKey] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    query_api_key: Optional[SchemeQueryAPIKey] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'query' }})
    
