import dataclasses



@dataclasses.dataclass
class SchemeOauth2:
    authorization: str = dataclasses.field(metadata={'security': { 'field_name': 'Authorization' }})
    

@dataclasses.dataclass
class SchemeOauth2c:
    authorization: str = dataclasses.field(metadata={'security': { 'field_name': 'Authorization' }})
    
