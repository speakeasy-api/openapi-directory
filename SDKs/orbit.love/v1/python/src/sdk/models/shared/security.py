import dataclasses



@dataclasses.dataclass
class SchemeAPIKey:
    api_key: str = dataclasses.field(metadata={'security': { 'field_name': 'api_key' }})
    

@dataclasses.dataclass
class SchemeBearer:
    api_key: str = dataclasses.field(metadata={'security': { 'field_name': 'Authorization' }})
    
