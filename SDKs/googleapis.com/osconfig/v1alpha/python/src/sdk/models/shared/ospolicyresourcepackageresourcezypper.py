import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class OsPolicyResourcePackageResourceZypper:
    r"""OsPolicyResourcePackageResourceZypper
    A package managed by Zypper. - install: `zypper -y install package` - remove: `zypper -y rm package`
    """
    
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    
