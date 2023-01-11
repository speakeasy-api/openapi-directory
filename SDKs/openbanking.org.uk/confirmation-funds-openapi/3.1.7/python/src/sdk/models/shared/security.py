import dataclasses



@dataclasses.dataclass
class SchemePsuoAuth2Security:
    authorization: str = dataclasses.field(metadata={'security': { 'field_name': 'Authorization' }})
    

@dataclasses.dataclass
class SchemeTppoAuth2Security:
    authorization: str = dataclasses.field(metadata={'security': { 'field_name': 'Authorization' }})
    
