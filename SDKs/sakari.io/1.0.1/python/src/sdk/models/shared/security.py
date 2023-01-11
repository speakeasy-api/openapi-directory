import dataclasses



@dataclasses.dataclass
class SchemeSakariAuth:
    authorization: str = dataclasses.field(metadata={'security': { 'field_name': 'Authorization' }})
    
