import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import apikeyoptions as shared_apikeyoptions
from ..shared import apikey as shared_apikey


@dataclasses.dataclass
class CreateAccountKeySecurity:
    bearer_auth: shared_security.SchemeBearerAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclasses.dataclass
class CreateAccountKeyRequest:
    request: shared_apikeyoptions.APIKeyOptions = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    security: CreateAccountKeySecurity = dataclasses.field()
    

@dataclasses.dataclass
class CreateAccountKeyResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    api_key: Optional[shared_apikey.APIKey] = dataclasses.field(default=None)
    
