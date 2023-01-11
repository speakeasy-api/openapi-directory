import dataclasses
from typing import Optional
from ..shared import actions_public_key as shared_actions_public_key


@dataclasses.dataclass
class ActionsGetOrgPublicKeyPathParams:
    org: str = dataclasses.field(metadata={'path_param': { 'field_name': 'org', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ActionsGetOrgPublicKeyRequest:
    path_params: ActionsGetOrgPublicKeyPathParams = dataclasses.field()
    

@dataclasses.dataclass
class ActionsGetOrgPublicKeyResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    actions_public_key: Optional[shared_actions_public_key.ActionsPublicKey] = dataclasses.field(default=None)
    
