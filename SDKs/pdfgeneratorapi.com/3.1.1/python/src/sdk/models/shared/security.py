import dataclasses



@dataclasses.dataclass
class SchemeJSONWebTokenAuth:
    authorization: str = dataclasses.field(metadata={'security': { 'field_name': 'Authorization' }})
    

@dataclasses.dataclass
class Security:
    json_web_token_auth: SchemeJSONWebTokenAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    
