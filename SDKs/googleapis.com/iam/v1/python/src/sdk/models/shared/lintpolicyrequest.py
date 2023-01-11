import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import expr as shared_expr


@dataclass_json
@dataclasses.dataclass
class LintPolicyRequest:
    r"""LintPolicyRequest
    The request to lint a Cloud IAM policy object.
    """
    
    condition: Optional[shared_expr.Expr] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('condition') }})
    full_resource_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fullResourceName') }})
    
