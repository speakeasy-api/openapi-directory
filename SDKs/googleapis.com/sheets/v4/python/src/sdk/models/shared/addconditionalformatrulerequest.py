import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import conditionalformatrule as shared_conditionalformatrule


@dataclass_json
@dataclasses.dataclass
class AddConditionalFormatRuleRequest:
    r"""AddConditionalFormatRuleRequest
    Adds a new conditional format rule at the given index. All subsequent rules' indexes are incremented.
    """
    
    index: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('index') }})
    rule: Optional[shared_conditionalformatrule.ConditionalFormatRule] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rule') }})
    
