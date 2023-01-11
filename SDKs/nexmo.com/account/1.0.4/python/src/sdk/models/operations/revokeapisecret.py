import dataclasses
from typing import Any,Optional
from ..shared import security as shared_security
from ..shared import errorapikeynotfound as shared_errorapikeynotfound
from ..shared import errorsecretidnotfound as shared_errorsecretidnotfound


@dataclasses.dataclass
class RevokeAPISecretPathParams:
    api_key: str = dataclasses.field(metadata={'path_param': { 'field_name': 'api_key', 'style': 'simple', 'explode': False }})
    secret_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'secret_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class RevokeAPISecretSecurity:
    basic_auth: shared_security.SchemeBasicAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class RevokeAPISecretRequest:
    path_params: RevokeAPISecretPathParams = dataclasses.field()
    security: RevokeAPISecretSecurity = dataclasses.field()
    

@dataclasses.dataclass
class RevokeAPISecretResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    revoke_api_secret_401_application_json_any: Optional[Any] = dataclasses.field(default=None)
    revoke_api_secret_403_application_json_any: Optional[Any] = dataclasses.field(default=None)
    revoke_api_secret_404_application_json_one_of: Optional[Any] = dataclasses.field(default=None)
    
