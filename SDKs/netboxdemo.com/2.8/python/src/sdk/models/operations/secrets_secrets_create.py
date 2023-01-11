import dataclasses
from typing import Optional
from ..shared import writablesecret as shared_writablesecret
from ..shared import secret as shared_secret


@dataclasses.dataclass
class SecretsSecretsCreateRequest:
    request: shared_writablesecret.WritableSecretInput = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class SecretsSecretsCreateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    secret: Optional[shared_secret.Secret] = dataclasses.field(default=None)
    
