import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import expr as shared_expr


@dataclass_json
@dataclasses.dataclass
class GoogleIamV1Binding:
    r"""GoogleIamV1Binding
    Associates `members`, or principals, with a `role`.
    """
    
    condition: Optional[shared_expr.Expr] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('condition') }})
    members: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('members') }})
    role: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('role') }})
    
