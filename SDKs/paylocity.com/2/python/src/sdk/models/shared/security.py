import dataclasses



@dataclasses.dataclass
class SchemePaylocityAuth:
    authorization: str = dataclasses.field(metadata={'security': { 'field_name': 'Authorization' }})
    
