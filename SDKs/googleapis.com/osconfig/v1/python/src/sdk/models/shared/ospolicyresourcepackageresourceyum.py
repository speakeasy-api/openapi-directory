import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class OsPolicyResourcePackageResourceYum:
    r"""OsPolicyResourcePackageResourceYum
    A package managed by YUM. - install: `yum -y install package` - remove: `yum -y remove package`
    """
    
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    
