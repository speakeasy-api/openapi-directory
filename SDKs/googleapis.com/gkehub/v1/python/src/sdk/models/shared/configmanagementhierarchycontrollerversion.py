import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class ConfigManagementHierarchyControllerVersion:
    r"""ConfigManagementHierarchyControllerVersion
    Version for Hierarchy Controller
    """
    
    extension: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('extension') }})
    hnc: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hnc') }})
    
