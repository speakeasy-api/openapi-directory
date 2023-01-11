import dataclasses



@dataclasses.dataclass
class SchemeAuth:
    api_key: str = dataclasses.field(metadata={'security': { 'field_name': 'Authorization' }})
    
