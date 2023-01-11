import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import apikey as shared_apikey


@dataclasses.dataclass
class AllAPIKeysSecurity:
    otoroshi_auth: shared_security.SchemeOtoroshiAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class AllAPIKeysRequest:
    security: AllAPIKeysSecurity = dataclasses.field()
    

@dataclasses.dataclass
class AllAPIKeysResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    api_keys: Optional[list[shared_apikey.APIKey]] = dataclasses.field(default=None)
    
