import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googletypeexpr as shared_googletypeexpr


@dataclass_json
@dataclasses.dataclass
class GoogleIamV1Binding:
    r"""GoogleIamV1Binding
    Associates `members` with a `role`.
    """
    
    condition: Optional[shared_googletypeexpr.GoogleTypeExpr] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('condition') }})
    members: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('members') }})
    role: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('role') }})
    
