import dataclasses
from typing import Optional
from ..shared import errormodel as shared_errormodel
from ..shared import link as shared_link


@dataclasses.dataclass
class PostEmployerSecretPathParams:
    employer_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'EmployerId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PostEmployerSecretHeaders:
    api_version: str = dataclasses.field(metadata={'header': { 'field_name': 'Api-Version', 'style': 'simple', 'explode': False }})
    authorization: str = dataclasses.field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PostEmployerSecretRequest:
    headers: PostEmployerSecretHeaders = dataclasses.field()
    path_params: PostEmployerSecretPathParams = dataclasses.field()
    

@dataclasses.dataclass
class PostEmployerSecretResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error_model: Optional[shared_errormodel.ErrorModel] = dataclasses.field(default=None)
    link: Optional[shared_link.Link] = dataclasses.field(default=None)
    
