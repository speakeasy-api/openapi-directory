import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import apigatewayexpr as shared_apigatewayexpr


@dataclass_json
@dataclasses.dataclass
class ApigatewayBinding:
    r"""ApigatewayBinding
    Associates `members`, or principals, with a `role`.
    """
    
    condition: Optional[shared_apigatewayexpr.ApigatewayExpr] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('condition') }})
    members: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('members') }})
    role: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('role') }})
    
