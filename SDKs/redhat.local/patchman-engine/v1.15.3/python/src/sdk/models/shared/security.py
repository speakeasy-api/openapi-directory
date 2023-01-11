import dataclasses



@dataclasses.dataclass
class SchemeRhIdentity:
    api_key: str = dataclasses.field(metadata={'security': { 'field_name': 'x-rh-identity' }})
    
