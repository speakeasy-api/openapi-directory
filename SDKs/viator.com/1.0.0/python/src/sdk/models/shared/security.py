import dataclasses
from typing import Optional


@dataclasses.dataclass
class SchemeAPIKey:
    api_key: str = dataclasses.field(metadata={'security': { 'field_name': 'exp-api-key' }})
    

@dataclasses.dataclass
class SchemeLegacyAPIKey:
    api_key: str = dataclasses.field(metadata={'security': { 'field_name': 'apiKey' }})
    

@dataclasses.dataclass
class Security:
    api_key: Optional[SchemeAPIKey] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    legacy_api_key: Optional[SchemeLegacyAPIKey] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'query' }})
    
