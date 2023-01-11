import dataclasses



@dataclasses.dataclass
class SchemeBearer:
    api_key: str = dataclasses.field(metadata={'security': { 'field_name': 'JWT' }})
    

@dataclasses.dataclass
class Security:
    bearer: SchemeBearer = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    
