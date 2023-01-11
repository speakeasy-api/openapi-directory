import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import lineitemassignedtargetingoption as shared_lineitemassignedtargetingoption


@dataclass_json
@dataclasses.dataclass
class BulkListAssignedTargetingOptionsResponse:
    line_item_assigned_targeting_options: Optional[list[shared_lineitemassignedtargetingoption.LineItemAssignedTargetingOption]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lineItemAssignedTargetingOptions') }})
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
