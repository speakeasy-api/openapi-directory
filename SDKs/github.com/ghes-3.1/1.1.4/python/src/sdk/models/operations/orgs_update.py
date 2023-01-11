import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import basic_error as shared_basic_error
from ..shared import organization_full as shared_organization_full
from ..shared import validation_error as shared_validation_error
from ..shared import validation_error_simple as shared_validation_error_simple


@dataclasses.dataclass
class OrgsUpdatePathParams:
    org: str = dataclasses.field(metadata={'path_param': { 'field_name': 'org', 'style': 'simple', 'explode': False }})
    
class OrgsUpdateRequestBodyDefaultRepositoryPermissionEnum(str, Enum):
    READ = "read"
    WRITE = "write"
    ADMIN = "admin"
    NONE = "none"

class OrgsUpdateRequestBodyMembersAllowedRepositoryCreationTypeEnum(str, Enum):
    ALL = "all"
    PRIVATE = "private"
    NONE = "none"


@dataclass_json
@dataclasses.dataclass
class OrgsUpdateRequestBody:
    billing_email: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('billing_email') }})
    blog: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('blog') }})
    company: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('company') }})
    default_repository_permission: Optional[OrgsUpdateRequestBodyDefaultRepositoryPermissionEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('default_repository_permission') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    email: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('email') }})
    has_organization_projects: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('has_organization_projects') }})
    has_repository_projects: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('has_repository_projects') }})
    location: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('location') }})
    members_allowed_repository_creation_type: Optional[OrgsUpdateRequestBodyMembersAllowedRepositoryCreationTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('members_allowed_repository_creation_type') }})
    members_can_create_internal_repositories: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('members_can_create_internal_repositories') }})
    members_can_create_pages: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('members_can_create_pages') }})
    members_can_create_private_repositories: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('members_can_create_private_repositories') }})
    members_can_create_public_repositories: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('members_can_create_public_repositories') }})
    members_can_create_repositories: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('members_can_create_repositories') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    twitter_username: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('twitter_username') }})
    

@dataclass_json
@dataclasses.dataclass
class OrgsUpdate415ApplicationJSON:
    documentation_url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('documentation_url') }})
    message: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclasses.dataclass
class OrgsUpdateRequest:
    path_params: OrgsUpdatePathParams = dataclasses.field()
    request: Optional[OrgsUpdateRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class OrgsUpdateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    basic_error: Optional[shared_basic_error.BasicError] = dataclasses.field(default=None)
    organization_full: Optional[shared_organization_full.OrganizationFull] = dataclasses.field(default=None)
    orgs_update_415_application_json_object: Optional[OrgsUpdate415ApplicationJSON] = dataclasses.field(default=None)
    orgs_update_422_application_json_one_of: Optional[Any] = dataclasses.field(default=None)
    
