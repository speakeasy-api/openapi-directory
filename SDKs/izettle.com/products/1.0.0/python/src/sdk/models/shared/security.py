import dataclasses



@dataclasses.dataclass
class SchemeZettleAPIKey:
    api_key: str = dataclasses.field(metadata={'security': { 'field_name': 'Authorization' }})
    

@dataclasses.dataclass
class SchemeZettleOauth:
    authorization: str = dataclasses.field(metadata={'security': { 'field_name': 'Authorization' }})
    
