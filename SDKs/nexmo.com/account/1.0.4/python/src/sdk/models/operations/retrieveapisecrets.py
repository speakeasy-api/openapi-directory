import dataclasses
from typing import Any,Optional
from ..shared import security as shared_security
from ..shared import errorapikeynotfound as shared_errorapikeynotfound


@dataclasses.dataclass
class RetrieveAPISecretsPathParams:
    api_key: str = dataclasses.field(metadata={'path_param': { 'field_name': 'api_key', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class RetrieveAPISecretsSecurity:
    basic_auth: shared_security.SchemeBasicAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class RetrieveAPISecretsRequest:
    path_params: RetrieveAPISecretsPathParams = dataclasses.field()
    security: RetrieveAPISecretsSecurity = dataclasses.field()
    

@dataclasses.dataclass
class RetrieveAPISecretsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error_api_key_not_found: Optional[shared_errorapikeynotfound.ErrorAPIKeyNotFound] = dataclasses.field(default=None)
    retrieve_api_secrets_200_application_json_any: Optional[Any] = dataclasses.field(default=None)
    retrieve_api_secrets_401_application_json_any: Optional[Any] = dataclasses.field(default=None)
    
