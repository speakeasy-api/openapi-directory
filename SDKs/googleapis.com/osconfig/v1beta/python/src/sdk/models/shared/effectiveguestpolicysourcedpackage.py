import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import package as shared_package


@dataclass_json
@dataclasses.dataclass
class EffectiveGuestPolicySourcedPackage:
    r"""EffectiveGuestPolicySourcedPackage
    A guest policy package including its source.
    """
    
    package: Optional[shared_package.Package] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('package') }})
    source: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('source') }})
    
