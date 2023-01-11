import dataclasses



@dataclasses.dataclass
class SchemeAuth:
    authorization: str = dataclasses.field(metadata={'security': { 'field_name': 'Authorization' }})
    
