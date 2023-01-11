import dataclasses
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class CreateOrganizationAdminPathParams:
    organization_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'organizationId', 'style': 'simple', 'explode': False }})
    
class CreateOrganizationAdminRequestBodyAuthenticationMethodEnum(str, Enum):
    EMAIL = "Email"
    CISCO_SECURE_X_SIGN_ON = "Cisco SecureX Sign-On"

class CreateOrganizationAdminRequestBodyNetworksAccessEnum(str, Enum):
    FULL = "full"
    READ_ONLY = "read-only"
    GUEST_AMBASSADOR = "guest-ambassador"
    MONITOR_ONLY = "monitor-only"


@dataclass_json
@dataclasses.dataclass
class CreateOrganizationAdminRequestBodyNetworks:
    access: CreateOrganizationAdminRequestBodyNetworksAccessEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('access') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    
class CreateOrganizationAdminRequestBodyOrgAccessEnum(str, Enum):
    FULL = "full"
    READ_ONLY = "read-only"
    ENTERPRISE = "enterprise"
    NONE = "none"

class CreateOrganizationAdminRequestBodyTagsAccessEnum(str, Enum):
    FULL = "full"
    READ_ONLY = "read-only"
    GUEST_AMBASSADOR = "guest-ambassador"
    MONITOR_ONLY = "monitor-only"


@dataclass_json
@dataclasses.dataclass
class CreateOrganizationAdminRequestBodyTags:
    access: CreateOrganizationAdminRequestBodyTagsAccessEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('access') }})
    tag: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('tag') }})
    

@dataclass_json
@dataclasses.dataclass
class CreateOrganizationAdminRequestBody:
    email: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('email') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    org_access: CreateOrganizationAdminRequestBodyOrgAccessEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('orgAccess') }})
    authentication_method: Optional[CreateOrganizationAdminRequestBodyAuthenticationMethodEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('authenticationMethod') }})
    networks: Optional[list[CreateOrganizationAdminRequestBodyNetworks]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('networks') }})
    tags: Optional[list[CreateOrganizationAdminRequestBodyTags]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    

@dataclasses.dataclass
class CreateOrganizationAdminRequest:
    path_params: CreateOrganizationAdminPathParams = dataclasses.field()
    request: CreateOrganizationAdminRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class CreateOrganizationAdminResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    create_organization_admin_201_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
