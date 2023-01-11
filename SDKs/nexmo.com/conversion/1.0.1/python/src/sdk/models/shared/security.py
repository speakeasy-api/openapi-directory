import dataclasses
from typing import Optional


@dataclasses.dataclass
class SchemeAPIKey:
    api_key: str = dataclasses.field(metadata={'security': { 'field_name': 'api_key' }})
    

@dataclasses.dataclass
class SchemeAPISecret:
    api_key: str = dataclasses.field(metadata={'security': { 'field_name': 'api_secret' }})
    

@dataclasses.dataclass
class SecurityOption1:
    api_key: SchemeAPIKey = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'query' }})
    api_secret: SchemeAPISecret = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'query' }})
    

@dataclasses.dataclass
class SchemeAPISig:
    api_key: str = dataclasses.field(metadata={'security': { 'field_name': 'sig' }})
    

@dataclasses.dataclass
class SecurityOption2:
    api_key: SchemeAPIKey = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'query' }})
    api_sig: SchemeAPISig = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'query' }})
    

@dataclasses.dataclass
class Security:
    option1: Optional[SecurityOption1] = dataclasses.field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[SecurityOption2] = dataclasses.field(default=None, metadata={'security': { 'option': True }})
    
