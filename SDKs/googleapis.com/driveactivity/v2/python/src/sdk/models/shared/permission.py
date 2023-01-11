import dataclasses
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import domain as shared_domain
from ..shared import group as shared_group
from ..shared import user as shared_user

class PermissionRoleEnum(str, Enum):
    ROLE_UNSPECIFIED = "ROLE_UNSPECIFIED"
    OWNER = "OWNER"
    ORGANIZER = "ORGANIZER"
    FILE_ORGANIZER = "FILE_ORGANIZER"
    EDITOR = "EDITOR"
    COMMENTER = "COMMENTER"
    VIEWER = "VIEWER"
    PUBLISHED_VIEWER = "PUBLISHED_VIEWER"


@dataclass_json
@dataclasses.dataclass
class Permission:
    r"""Permission
    The permission setting of an object.
    """
    
    allow_discovery: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allowDiscovery') }})
    anyone: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('anyone') }})
    domain: Optional[shared_domain.Domain] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('domain') }})
    group: Optional[shared_group.Group] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('group') }})
    role: Optional[PermissionRoleEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('role') }})
    user: Optional[shared_user.User] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('user') }})
    
