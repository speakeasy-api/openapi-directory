import dataclasses
from typing import Any,Optional
from ..shared import security as shared_security
from ..shared import errorapikeynotfound as shared_errorapikeynotfound
from ..shared import errorsecretidnotfound as shared_errorsecretidnotfound
from ..shared import secretinfo as shared_secretinfo


@dataclasses.dataclass
class RetrieveAPISecretPathParams:
    api_key: str = dataclasses.field(metadata={'path_param': { 'field_name': 'api_key', 'style': 'simple', 'explode': False }})
    secret_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'secret_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class RetrieveAPISecretSecurity:
    basic_auth: shared_security.SchemeBasicAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class RetrieveAPISecretRequest:
    path_params: RetrieveAPISecretPathParams = dataclasses.field()
    security: RetrieveAPISecretSecurity = dataclasses.field()
    

@dataclasses.dataclass
class RetrieveAPISecretResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    retrieve_api_secret_401_application_json_any: Optional[Any] = dataclasses.field(default=None)
    retrieve_api_secret_404_application_json_one_of: Optional[Any] = dataclasses.field(default=None)
    secret_info: Optional[shared_secretinfo.SecretInfo] = dataclasses.field(default=None)
    
