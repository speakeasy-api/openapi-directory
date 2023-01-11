import dataclasses



@dataclasses.dataclass
class SchemeTokenAuthentication:
    api_key: str = dataclasses.field(metadata={'security': { 'field_name': 'Authorization' }})
    

@dataclasses.dataclass
class Security:
    token_authentication: SchemeTokenAuthentication = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    
