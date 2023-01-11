import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import apikey as shared_apikey


@dataclasses.dataclass
class APIKeysPathParams:
    service_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'serviceId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class APIKeysSecurity:
    otoroshi_auth: shared_security.SchemeOtoroshiAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class APIKeysRequest:
    path_params: APIKeysPathParams = dataclasses.field()
    security: APIKeysSecurity = dataclasses.field()
    

@dataclasses.dataclass
class APIKeysResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    api_keys: Optional[list[shared_apikey.APIKey]] = dataclasses.field(default=None)
    
