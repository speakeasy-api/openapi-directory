import dataclasses



@dataclasses.dataclass
class SchemeAPITokens:
    api_key: str = dataclasses.field(metadata={'security': { 'field_name': 'X-API-Token' }})
    

@dataclasses.dataclass
class Security:
    api_tokens: SchemeAPITokens = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    
