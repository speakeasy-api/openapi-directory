import dataclasses
from typing import Optional


@dataclasses.dataclass
class SchemeAPIKeyHeader:
    api_key: str = dataclasses.field(metadata={'security': { 'field_name': 'Ocp-Apim-Subscription-Key' }})
    

@dataclasses.dataclass
class SchemeAPIKeyQuery:
    api_key: str = dataclasses.field(metadata={'security': { 'field_name': 'subscription-key' }})
    

@dataclasses.dataclass
class Security:
    api_key_header: Optional[SchemeAPIKeyHeader] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    api_key_query: Optional[SchemeAPIKeyQuery] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'query' }})
    
