import dataclasses



@dataclasses.dataclass
class SchemeDeveloperHapikey:
    api_key: str = dataclasses.field(metadata={'security': { 'field_name': 'hapikey' }})
    
