import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import conditionalformatrule as shared_conditionalformatrule


@dataclass_json
@dataclasses.dataclass
class UpdateConditionalFormatRuleResponse:
    r"""UpdateConditionalFormatRuleResponse
    The result of updating a conditional format rule.
    """
    
    new_index: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('newIndex') }})
    new_rule: Optional[shared_conditionalformatrule.ConditionalFormatRule] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('newRule') }})
    old_index: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('oldIndex') }})
    old_rule: Optional[shared_conditionalformatrule.ConditionalFormatRule] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('oldRule') }})
    
