import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class GoogleAppsDriveLabelsV2betaLabelPermissionRoleEnum(str, Enum):
    LABEL_ROLE_UNSPECIFIED = "LABEL_ROLE_UNSPECIFIED"
    READER = "READER"
    APPLIER = "APPLIER"
    ORGANIZER = "ORGANIZER"
    EDITOR = "EDITOR"


@dataclass_json
@dataclasses.dataclass
class GoogleAppsDriveLabelsV2betaLabelPermission:
    r"""GoogleAppsDriveLabelsV2betaLabelPermission
    The permission that applies to a principal (user, group, audience) on a label.
    """
    
    audience: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('audience') }})
    email: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('email') }})
    group: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('group') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    person: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('person') }})
    role: Optional[GoogleAppsDriveLabelsV2betaLabelPermissionRoleEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('role') }})
    
