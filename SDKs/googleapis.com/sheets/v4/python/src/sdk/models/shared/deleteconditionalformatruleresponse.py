import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import conditionalformatrule as shared_conditionalformatrule


@dataclass_json
@dataclasses.dataclass
class DeleteConditionalFormatRuleResponse:
    r"""DeleteConditionalFormatRuleResponse
    The result of deleting a conditional format rule.
    """
    
    rule: Optional[shared_conditionalformatrule.ConditionalFormatRule] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rule') }})
    
