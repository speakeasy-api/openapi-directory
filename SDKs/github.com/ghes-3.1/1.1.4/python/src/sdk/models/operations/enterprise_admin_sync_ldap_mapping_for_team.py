import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class EnterpriseAdminSyncLdapMappingForTeamPathParams:
    team_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'team_id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class EnterpriseAdminSyncLdapMappingForTeam201ApplicationJSON:
    status: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    

@dataclasses.dataclass
class EnterpriseAdminSyncLdapMappingForTeamRequest:
    path_params: EnterpriseAdminSyncLdapMappingForTeamPathParams = dataclasses.field()
    

@dataclasses.dataclass
class EnterpriseAdminSyncLdapMappingForTeamResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    enterprise_admin_sync_ldap_mapping_for_team_201_application_json_object: Optional[EnterpriseAdminSyncLdapMappingForTeam201ApplicationJSON] = dataclasses.field(default=None)
    
