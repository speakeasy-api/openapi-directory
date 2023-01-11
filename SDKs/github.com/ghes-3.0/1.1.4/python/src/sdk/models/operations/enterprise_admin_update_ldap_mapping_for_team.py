import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import ldap_mapping_team as shared_ldap_mapping_team


@dataclasses.dataclass
class EnterpriseAdminUpdateLdapMappingForTeamPathParams:
    team_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'team_id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class EnterpriseAdminUpdateLdapMappingForTeamRequestBody:
    ldap_dn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ldap_dn') }})
    

@dataclasses.dataclass
class EnterpriseAdminUpdateLdapMappingForTeamRequest:
    path_params: EnterpriseAdminUpdateLdapMappingForTeamPathParams = dataclasses.field()
    request: Optional[EnterpriseAdminUpdateLdapMappingForTeamRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class EnterpriseAdminUpdateLdapMappingForTeamResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    ldap_mapping_team: Optional[shared_ldap_mapping_team.LdapMappingTeam] = dataclasses.field(default=None)
    
