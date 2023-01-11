import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import writablesecret as shared_writablesecret
from ..shared import secret as shared_secret


@dataclasses.dataclass
class SecretsSecretsUpdatePathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class SecretsSecretsUpdateRequest:
    path_params: SecretsSecretsUpdatePathParams = dataclasses.field()
    request: shared_writablesecret.WritableSecretInput = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class SecretsSecretsUpdateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    secret: Optional[shared_secret.Secret] = dataclasses.field(default=None)
    
