import dataclasses



@dataclasses.dataclass
class SchemeCookie:
    api_key: str = dataclasses.field(metadata={'security': { 'field_name': 'Cookie' }})
    
