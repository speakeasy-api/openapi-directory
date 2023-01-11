import dataclasses



@dataclasses.dataclass
class SchemeOauth20:
    authorization: str = dataclasses.field(metadata={'security': { 'field_name': 'Authorization' }})
    
