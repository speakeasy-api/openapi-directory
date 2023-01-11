import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import security as shared_security
from ..shared import security as shared_security
from ..shared import identificationtokengenerationrequest as shared_identificationtokengenerationrequest
from ..shared import identificationtokenresponse as shared_identificationtokenresponse


@dataclasses.dataclass
class PostVisitorIdentificationV3TokensCreateGenerateTokenSecurity:
    hapikey: Optional[shared_security.SchemeHapikey] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'query' }})
    oauth2_legacy: Optional[shared_security.SchemeOauth2Legacy] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    private_apps_legacy: Optional[shared_security.SchemePrivateAppsLegacy] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class PostVisitorIdentificationV3TokensCreateGenerateTokenRequest:
    request: shared_identificationtokengenerationrequest.IdentificationTokenGenerationRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    security: PostVisitorIdentificationV3TokensCreateGenerateTokenSecurity = dataclasses.field()
    

@dataclasses.dataclass
class PostVisitorIdentificationV3TokensCreateGenerateTokenResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    identification_token_response: Optional[shared_identificationtokenresponse.IdentificationTokenResponse] = dataclasses.field(default=None)
    
