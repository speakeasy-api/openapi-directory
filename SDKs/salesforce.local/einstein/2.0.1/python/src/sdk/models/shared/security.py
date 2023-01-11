import dataclasses



@dataclasses.dataclass
class SchemeBearerToken:
    authorization: str = dataclasses.field(metadata={'security': { 'field_name': 'Authorization' }})
    
