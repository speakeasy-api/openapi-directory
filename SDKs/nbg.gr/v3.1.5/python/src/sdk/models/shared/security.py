import dataclasses



@dataclasses.dataclass
class SchemeAuthorizationCodeToken:
    authorization: str = dataclasses.field(metadata={'security': { 'field_name': 'Authorization' }})
    

@dataclasses.dataclass
class SchemeClientCredentialsToken:
    authorization: str = dataclasses.field(metadata={'security': { 'field_name': 'Authorization' }})
    

@dataclasses.dataclass
class SchemeClientID:
    api_key: str = dataclasses.field(metadata={'security': { 'field_name': 'Client-Id' }})
    
