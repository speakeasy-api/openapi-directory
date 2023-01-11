import dataclasses
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class CreateOrganizationSamlRolePathParams:
    organization_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'organizationId', 'style': 'simple', 'explode': False }})
    
class CreateOrganizationSamlRoleRequestBodyNetworksAccessEnum(str, Enum):
    FULL = "full"
    READ_ONLY = "read-only"
    GUEST_AMBASSADOR = "guest-ambassador"
    MONITOR_ONLY = "monitor-only"


@dataclass_json
@dataclasses.dataclass
class CreateOrganizationSamlRoleRequestBodyNetworks:
    access: CreateOrganizationSamlRoleRequestBodyNetworksAccessEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('access') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    
class CreateOrganizationSamlRoleRequestBodyOrgAccessEnum(str, Enum):
    NONE = "none"
    READ_ONLY = "read-only"
    FULL = "full"

class CreateOrganizationSamlRoleRequestBodyTagsAccessEnum(str, Enum):
    FULL = "full"
    READ_ONLY = "read-only"
    GUEST_AMBASSADOR = "guest-ambassador"
    MONITOR_ONLY = "monitor-only"


@dataclass_json
@dataclasses.dataclass
class CreateOrganizationSamlRoleRequestBodyTags:
    access: CreateOrganizationSamlRoleRequestBodyTagsAccessEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('access') }})
    tag: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('tag') }})
    

@dataclass_json
@dataclasses.dataclass
class CreateOrganizationSamlRoleRequestBody:
    org_access: CreateOrganizationSamlRoleRequestBodyOrgAccessEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('orgAccess') }})
    role: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('role') }})
    networks: Optional[list[CreateOrganizationSamlRoleRequestBodyNetworks]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('networks') }})
    tags: Optional[list[CreateOrganizationSamlRoleRequestBodyTags]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    

@dataclasses.dataclass
class CreateOrganizationSamlRoleRequest:
    path_params: CreateOrganizationSamlRolePathParams = dataclasses.field()
    request: CreateOrganizationSamlRoleRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class CreateOrganizationSamlRoleResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    create_organization_saml_role_201_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
