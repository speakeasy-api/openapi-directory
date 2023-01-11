import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import restoreplan as shared_restoreplan


@dataclass_json
@dataclasses.dataclass
class ListRestorePlansResponse:
    r"""ListRestorePlansResponse
    Response message for ListRestorePlans.
    """
    
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    restore_plans: Optional[list[shared_restoreplan.RestorePlan]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('restorePlans') }})
    unreachable: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('unreachable') }})
    
