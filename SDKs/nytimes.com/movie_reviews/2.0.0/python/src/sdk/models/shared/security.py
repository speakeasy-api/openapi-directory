import dataclasses



@dataclasses.dataclass
class SchemeApikey:
    api_key: str = dataclasses.field(metadata={'security': { 'field_name': 'api-key' }})
    

@dataclasses.dataclass
class Security:
    apikey: SchemeApikey = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'query' }})
    
