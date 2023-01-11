import dataclasses
from typing import Any,Optional
from ..shared import security as shared_security
from ..shared import createsecretrequest as shared_createsecretrequest
from ..shared import errorapikeynotfound as shared_errorapikeynotfound
from ..shared import secretinfo as shared_secretinfo


@dataclasses.dataclass
class CreateAPISecretPathParams:
    api_key: str = dataclasses.field(metadata={'path_param': { 'field_name': 'api_key', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CreateAPISecretSecurity:
    basic_auth: shared_security.SchemeBasicAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class CreateAPISecretRequest:
    path_params: CreateAPISecretPathParams = dataclasses.field()
    request: shared_createsecretrequest.CreateSecretRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    security: CreateAPISecretSecurity = dataclasses.field()
    

@dataclasses.dataclass
class CreateAPISecretResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error_api_key_not_found: Optional[shared_errorapikeynotfound.ErrorAPIKeyNotFound] = dataclasses.field(default=None)
    create_api_secret_400_application_json_any: Optional[Any] = dataclasses.field(default=None)
    create_api_secret_401_application_json_any: Optional[Any] = dataclasses.field(default=None)
    secret_info: Optional[shared_secretinfo.SecretInfo] = dataclasses.field(default=None)
    
