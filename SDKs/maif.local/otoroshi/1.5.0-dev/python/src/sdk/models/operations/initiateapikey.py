import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import apikey as shared_apikey


@dataclasses.dataclass
class InitiateAPIKeySecurity:
    otoroshi_auth: shared_security.SchemeOtoroshiAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class InitiateAPIKeyRequest:
    security: InitiateAPIKeySecurity = dataclasses.field()
    

@dataclasses.dataclass
class InitiateAPIKeyResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    api_key: Optional[shared_apikey.APIKey] = dataclasses.field(default=None)
    
