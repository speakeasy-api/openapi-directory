import dataclasses



@dataclasses.dataclass
class SchemeCookieAuth:
    api_key: str = dataclasses.field(metadata={'security': { 'field_name': 'portal' }})
    

@dataclasses.dataclass
class Security:
    cookie_auth: SchemeCookieAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    
