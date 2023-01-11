import dataclasses



@dataclasses.dataclass
class SchemeApikey:
    api_key: str = dataclasses.field(metadata={'security': { 'field_name': 'apikey' }})
    
