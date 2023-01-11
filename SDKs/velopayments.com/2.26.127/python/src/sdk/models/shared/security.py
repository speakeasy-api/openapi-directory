import dataclasses



@dataclasses.dataclass
class SchemeOAuth2:
    authorization: str = dataclasses.field(metadata={'security': { 'field_name': 'Authorization' }})
    

@dataclasses.dataclass
class Security:
    o_auth2: SchemeOAuth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class SchemeBasicAuth:
    password: str = dataclasses.field(metadata={'security': { 'field_name': 'password' }})
    username: str = dataclasses.field(metadata={'security': { 'field_name': 'username' }})
    

@dataclasses.dataclass
class SchemeOAuthVeloBackOffice:
    authorization: str = dataclasses.field(metadata={'security': { 'field_name': 'Authorization' }})
    
