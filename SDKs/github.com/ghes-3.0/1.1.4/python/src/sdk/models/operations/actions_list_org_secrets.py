import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import organization_actions_secret as shared_organization_actions_secret


@dataclasses.dataclass
class ActionsListOrgSecretsPathParams:
    org: str = dataclasses.field(metadata={'path_param': { 'field_name': 'org', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ActionsListOrgSecretsQueryParams:
    page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclasses.dataclass
class ActionsListOrgSecrets200ApplicationJSON:
    secrets: list[shared_organization_actions_secret.OrganizationActionsSecret] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('secrets') }})
    total_count: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total_count') }})
    

@dataclasses.dataclass
class ActionsListOrgSecretsRequest:
    path_params: ActionsListOrgSecretsPathParams = dataclasses.field()
    query_params: ActionsListOrgSecretsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class ActionsListOrgSecretsResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    actions_list_org_secrets_200_application_json_object: Optional[ActionsListOrgSecrets200ApplicationJSON] = dataclasses.field(default=None)
    
