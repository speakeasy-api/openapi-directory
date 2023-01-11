import dataclasses



@dataclasses.dataclass
class SchemeJwt:
    authorization: str = dataclasses.field(metadata={'security': { 'field_name': 'Authorization' }})
    
