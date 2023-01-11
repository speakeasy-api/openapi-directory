import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class UpdateOrganizationSamlRolePathParams:
    organization_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'organizationId', 'style': 'simple', 'explode': False }})
    saml_role_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'samlRoleId', 'style': 'simple', 'explode': False }})
    
class UpdateOrganizationSamlRoleRequestBodyNetworksAccessEnum(str, Enum):
    FULL = "full"
    READ_ONLY = "read-only"
    GUEST_AMBASSADOR = "guest-ambassador"
    MONITOR_ONLY = "monitor-only"


@dataclass_json
@dataclasses.dataclass
class UpdateOrganizationSamlRoleRequestBodyNetworks:
    access: UpdateOrganizationSamlRoleRequestBodyNetworksAccessEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('access') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    
class UpdateOrganizationSamlRoleRequestBodyOrgAccessEnum(str, Enum):
    NONE = "none"
    READ_ONLY = "read-only"
    FULL = "full"

class UpdateOrganizationSamlRoleRequestBodyTagsAccessEnum(str, Enum):
    FULL = "full"
    READ_ONLY = "read-only"
    GUEST_AMBASSADOR = "guest-ambassador"
    MONITOR_ONLY = "monitor-only"


@dataclass_json
@dataclasses.dataclass
class UpdateOrganizationSamlRoleRequestBodyTags:
    access: UpdateOrganizationSamlRoleRequestBodyTagsAccessEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('access') }})
    tag: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('tag') }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateOrganizationSamlRoleRequestBody:
    networks: Optional[list[UpdateOrganizationSamlRoleRequestBodyNetworks]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('networks') }})
    org_access: Optional[UpdateOrganizationSamlRoleRequestBodyOrgAccessEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('orgAccess') }})
    role: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('role') }})
    tags: Optional[list[UpdateOrganizationSamlRoleRequestBodyTags]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    

@dataclasses.dataclass
class UpdateOrganizationSamlRoleRequest:
    path_params: UpdateOrganizationSamlRolePathParams = dataclasses.field()
    request: Optional[UpdateOrganizationSamlRoleRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class UpdateOrganizationSamlRoleResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    update_organization_saml_role_200_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
