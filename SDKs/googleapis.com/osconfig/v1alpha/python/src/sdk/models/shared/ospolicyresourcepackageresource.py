import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import ospolicyresourcepackageresourceapt as shared_ospolicyresourcepackageresourceapt
from ..shared import ospolicyresourcepackageresourcedeb as shared_ospolicyresourcepackageresourcedeb
from ..shared import ospolicyresourcepackageresourcegooget as shared_ospolicyresourcepackageresourcegooget
from ..shared import ospolicyresourcepackageresourcemsi as shared_ospolicyresourcepackageresourcemsi
from ..shared import ospolicyresourcepackageresourcerpm as shared_ospolicyresourcepackageresourcerpm
from ..shared import ospolicyresourcepackageresourceyum as shared_ospolicyresourcepackageresourceyum
from ..shared import ospolicyresourcepackageresourcezypper as shared_ospolicyresourcepackageresourcezypper

class OsPolicyResourcePackageResourceDesiredStateEnum(str, Enum):
    DESIRED_STATE_UNSPECIFIED = "DESIRED_STATE_UNSPECIFIED"
    INSTALLED = "INSTALLED"
    REMOVED = "REMOVED"


@dataclass_json
@dataclasses.dataclass
class OsPolicyResourcePackageResource:
    r"""OsPolicyResourcePackageResource
    A resource that manages a system package.
    """
    
    apt: Optional[shared_ospolicyresourcepackageresourceapt.OsPolicyResourcePackageResourceApt] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('apt') }})
    deb: Optional[shared_ospolicyresourcepackageresourcedeb.OsPolicyResourcePackageResourceDeb] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deb') }})
    desired_state: Optional[OsPolicyResourcePackageResourceDesiredStateEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('desiredState') }})
    googet: Optional[shared_ospolicyresourcepackageresourcegooget.OsPolicyResourcePackageResourceGooGet] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('googet') }})
    msi: Optional[shared_ospolicyresourcepackageresourcemsi.OsPolicyResourcePackageResourceMsi] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('msi') }})
    rpm: Optional[shared_ospolicyresourcepackageresourcerpm.OsPolicyResourcePackageResourceRpm] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rpm') }})
    yum: Optional[shared_ospolicyresourcepackageresourceyum.OsPolicyResourcePackageResourceYum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('yum') }})
    zypper: Optional[shared_ospolicyresourcepackageresourcezypper.OsPolicyResourcePackageResourceZypper] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('zypper') }})
    
