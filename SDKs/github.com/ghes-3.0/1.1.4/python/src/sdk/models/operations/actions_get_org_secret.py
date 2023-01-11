import dataclasses
from typing import Optional
from ..shared import organization_actions_secret as shared_organization_actions_secret


@dataclasses.dataclass
class ActionsGetOrgSecretPathParams:
    org: str = dataclasses.field(metadata={'path_param': { 'field_name': 'org', 'style': 'simple', 'explode': False }})
    secret_name: str = dataclasses.field(metadata={'path_param': { 'field_name': 'secret_name', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ActionsGetOrgSecretRequest:
    path_params: ActionsGetOrgSecretPathParams = dataclasses.field()
    

@dataclasses.dataclass
class ActionsGetOrgSecretResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    organization_actions_secret: Optional[shared_organization_actions_secret.OrganizationActionsSecret] = dataclasses.field(default=None)
    
