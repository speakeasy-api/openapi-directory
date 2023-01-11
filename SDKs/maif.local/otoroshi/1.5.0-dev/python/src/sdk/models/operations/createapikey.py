import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import apikey as shared_apikey


@dataclasses.dataclass
class CreateAPIKeyPathParams:
    service_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'serviceId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CreateAPIKeySecurity:
    otoroshi_auth: shared_security.SchemeOtoroshiAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class CreateAPIKeyRequest:
    path_params: CreateAPIKeyPathParams = dataclasses.field()
    security: CreateAPIKeySecurity = dataclasses.field()
    request: Optional[shared_apikey.APIKey] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class CreateAPIKeyResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    api_key: Optional[shared_apikey.APIKey] = dataclasses.field(default=None)
    
