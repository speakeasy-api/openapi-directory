import dataclasses



@dataclasses.dataclass
class SchemeCastLocalAuthorizationToken:
    api_key: str = dataclasses.field(metadata={'security': { 'field_name': 'cast-local-authorization-token' }})
    

@dataclasses.dataclass
class Security:
    cast_local_authorization_token: SchemeCastLocalAuthorizationToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    
