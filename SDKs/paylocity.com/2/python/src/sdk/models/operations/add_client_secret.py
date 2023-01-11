import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import addclientsecret as shared_addclientsecret
from ..shared import clientcredentialsresponse as shared_clientcredentialsresponse
from ..shared import error as shared_error


@dataclasses.dataclass
class AddClientSecretSecurity:
    paylocity_auth: shared_security.SchemePaylocityAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class AddClientSecretRequest:
    request: shared_addclientsecret.AddClientSecret = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    security: AddClientSecretSecurity = dataclasses.field()
    

@dataclasses.dataclass
class AddClientSecretResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    client_credentials_responses: Optional[list[shared_clientcredentialsresponse.ClientCredentialsResponse]] = dataclasses.field(default=None)
    errors: Optional[list[shared_error.Error]] = dataclasses.field(default=None)
    
