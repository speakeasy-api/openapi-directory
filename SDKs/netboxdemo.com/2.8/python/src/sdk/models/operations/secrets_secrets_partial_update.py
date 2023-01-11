import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import writablesecret as shared_writablesecret
from ..shared import secret as shared_secret


@dataclasses.dataclass
class SecretsSecretsPartialUpdatePathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class SecretsSecretsPartialUpdateRequest:
    path_params: SecretsSecretsPartialUpdatePathParams = dataclasses.field()
    request: shared_writablesecret.WritableSecretInput = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class SecretsSecretsPartialUpdateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    secret: Optional[shared_secret.Secret] = dataclasses.field(default=None)
    
