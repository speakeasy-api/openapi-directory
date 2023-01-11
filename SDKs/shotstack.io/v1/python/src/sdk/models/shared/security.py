import dataclasses



@dataclasses.dataclass
class SchemeDeveloperKey:
    api_key: str = dataclasses.field(metadata={'security': { 'field_name': 'x-api-key' }})
    
