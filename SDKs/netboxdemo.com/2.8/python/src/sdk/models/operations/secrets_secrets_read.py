import dataclasses
from typing import Optional
from ..shared import secret as shared_secret


@dataclasses.dataclass
class SecretsSecretsReadPathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class SecretsSecretsReadRequest:
    path_params: SecretsSecretsReadPathParams = dataclasses.field()
    

@dataclasses.dataclass
class SecretsSecretsReadResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    secret: Optional[shared_secret.Secret] = dataclasses.field(default=None)
    
