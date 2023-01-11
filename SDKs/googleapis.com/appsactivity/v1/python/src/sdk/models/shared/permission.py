import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import user as shared_user

class PermissionRoleEnum(str, Enum):
    COMMENTER = "commenter"
    FILE_ORGANIZER = "fileOrganizer"
    OWNER = "owner"
    PUBLISHED_READER = "publishedReader"
    READER = "reader"
    WRITER = "writer"

class PermissionTypeEnum(str, Enum):
    ANYONE = "anyone"
    DOMAIN = "domain"
    GROUP = "group"
    USER = "user"


@dataclass_json
@dataclasses.dataclass
class Permission:
    r"""Permission
    Contains information about the permissions and type of access allowed with regards to a Google Drive object. This is a subset of the fields contained in a corresponding Drive Permissions object.
    """
    
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    permission_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('permissionId') }})
    role: Optional[PermissionRoleEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('role') }})
    type: Optional[PermissionTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    user: Optional[shared_user.User] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('user') }})
    with_link: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('withLink') }})
    
