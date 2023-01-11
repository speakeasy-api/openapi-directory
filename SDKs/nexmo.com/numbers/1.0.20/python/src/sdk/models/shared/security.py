import dataclasses



@dataclasses.dataclass
class SchemeAPIKey:
    api_key: str = dataclasses.field(metadata={'security': { 'field_name': 'api_key' }})
    

@dataclasses.dataclass
class SchemeAPISecret:
    api_key: str = dataclasses.field(metadata={'security': { 'field_name': 'api_secret' }})
    

@dataclasses.dataclass
class Security:
    api_key: SchemeAPIKey = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'query' }})
    api_secret: SchemeAPISecret = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'query' }})
    
