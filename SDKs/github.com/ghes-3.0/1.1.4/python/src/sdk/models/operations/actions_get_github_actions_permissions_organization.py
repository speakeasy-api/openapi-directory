import dataclasses
from typing import Optional
from ..shared import actions_organization_permissions as shared_actions_organization_permissions


@dataclasses.dataclass
class ActionsGetGithubActionsPermissionsOrganizationPathParams:
    org: str = dataclasses.field(metadata={'path_param': { 'field_name': 'org', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ActionsGetGithubActionsPermissionsOrganizationRequest:
    path_params: ActionsGetGithubActionsPermissionsOrganizationPathParams = dataclasses.field()
    

@dataclasses.dataclass
class ActionsGetGithubActionsPermissionsOrganizationResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    actions_organization_permissions: Optional[shared_actions_organization_permissions.ActionsOrganizationPermissions] = dataclasses.field(default=None)
    
