import dataclasses



@dataclasses.dataclass
class SchemeAuthHeader:
    api_key: str = dataclasses.field(metadata={'security': { 'field_name': 'Authorization' }})
    

@dataclasses.dataclass
class SchemeClientID:
    api_key: str = dataclasses.field(metadata={'security': { 'field_name': 'client_id' }})
    
