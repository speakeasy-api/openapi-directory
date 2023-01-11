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
class UpdateConditionalFormatRuleRequest:
    r"""UpdateConditionalFormatRuleRequest
    Updates a conditional format rule at the given index, or moves a conditional format rule to another index.
    """
    
    index: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('index') }})
    new_index: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('newIndex') }})
    rule: Optional[shared_conditionalformatrule.ConditionalFormatRule] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rule') }})
    sheet_id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sheetId') }})
    
