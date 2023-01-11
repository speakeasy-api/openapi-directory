import dataclasses
from typing import Optional
from ..shared import employersecret as shared_employersecret
from ..shared import errormodel as shared_errormodel


@dataclasses.dataclass
class PutEmployerSecretPathParams:
    employer_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'EmployerId', 'style': 'simple', 'explode': False }})
    secret_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'SecretId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PutEmployerSecretHeaders:
    api_version: str = dataclasses.field(metadata={'header': { 'field_name': 'Api-Version', 'style': 'simple', 'explode': False }})
    authorization: str = dataclasses.field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PutEmployerSecretRequest:
    headers: PutEmployerSecretHeaders = dataclasses.field()
    path_params: PutEmployerSecretPathParams = dataclasses.field()
    

@dataclasses.dataclass
class PutEmployerSecretResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    employer_secret: Optional[shared_employersecret.EmployerSecret] = dataclasses.field(default=None)
    error_model: Optional[shared_errormodel.ErrorModel] = dataclasses.field(default=None)
    
