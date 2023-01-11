import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class OsPolicyResourcePackageResourceGooGet:
    r"""OsPolicyResourcePackageResourceGooGet
    A package managed by GooGet. - install: `googet -noconfirm install package` - remove: `googet -noconfirm remove package`
    """
    
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    
