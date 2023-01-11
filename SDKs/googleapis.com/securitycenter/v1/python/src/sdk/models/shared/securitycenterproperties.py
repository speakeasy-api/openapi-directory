import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import folder as shared_folder


@dataclass_json
@dataclasses.dataclass
class SecurityCenterProperties:
    r"""SecurityCenterProperties
    Security Command Center managed properties. These properties are managed by Security Command Center and cannot be modified by the user.
    """
    
    folders: Optional[list[shared_folder.Folder]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('folders') }})
    resource_display_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resourceDisplayName') }})
    resource_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resourceName') }})
    resource_owners: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resourceOwners') }})
    resource_parent: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resourceParent') }})
    resource_parent_display_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resourceParentDisplayName') }})
    resource_project: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resourceProject') }})
    resource_project_display_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resourceProjectDisplayName') }})
    resource_type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resourceType') }})
    
