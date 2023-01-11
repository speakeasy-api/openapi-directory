import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class UpdateOrganizationAdminPathParams:
    admin_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'adminId', 'style': 'simple', 'explode': False }})
    organization_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'organizationId', 'style': 'simple', 'explode': False }})
    
class UpdateOrganizationAdminRequestBodyNetworksAccessEnum(str, Enum):
    FULL = "full"
    READ_ONLY = "read-only"
    GUEST_AMBASSADOR = "guest-ambassador"
    MONITOR_ONLY = "monitor-only"


@dataclass_json
@dataclasses.dataclass
class UpdateOrganizationAdminRequestBodyNetworks:
    access: UpdateOrganizationAdminRequestBodyNetworksAccessEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('access') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    
class UpdateOrganizationAdminRequestBodyOrgAccessEnum(str, Enum):
    FULL = "full"
    READ_ONLY = "read-only"
    ENTERPRISE = "enterprise"
    NONE = "none"

class UpdateOrganizationAdminRequestBodyTagsAccessEnum(str, Enum):
    FULL = "full"
    READ_ONLY = "read-only"
    GUEST_AMBASSADOR = "guest-ambassador"
    MONITOR_ONLY = "monitor-only"


@dataclass_json
@dataclasses.dataclass
class UpdateOrganizationAdminRequestBodyTags:
    access: UpdateOrganizationAdminRequestBodyTagsAccessEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('access') }})
    tag: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('tag') }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateOrganizationAdminRequestBody:
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    networks: Optional[list[UpdateOrganizationAdminRequestBodyNetworks]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('networks') }})
    org_access: Optional[UpdateOrganizationAdminRequestBodyOrgAccessEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('orgAccess') }})
    tags: Optional[list[UpdateOrganizationAdminRequestBodyTags]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    

@dataclasses.dataclass
class UpdateOrganizationAdminRequest:
    path_params: UpdateOrganizationAdminPathParams = dataclasses.field()
    request: Optional[UpdateOrganizationAdminRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class UpdateOrganizationAdminResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    update_organization_admin_200_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
