import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import ldap_mapping_user as shared_ldap_mapping_user


@dataclasses.dataclass
class EnterpriseAdminUpdateLdapMappingForUserPathParams:
    username: str = dataclasses.field(metadata={'path_param': { 'field_name': 'username', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class EnterpriseAdminUpdateLdapMappingForUserRequestBody:
    ldap_dn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ldap_dn') }})
    

@dataclasses.dataclass
class EnterpriseAdminUpdateLdapMappingForUserRequest:
    path_params: EnterpriseAdminUpdateLdapMappingForUserPathParams = dataclasses.field()
    request: Optional[EnterpriseAdminUpdateLdapMappingForUserRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class EnterpriseAdminUpdateLdapMappingForUserResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    ldap_mapping_user: Optional[shared_ldap_mapping_user.LdapMappingUser] = dataclasses.field(default=None)
    
