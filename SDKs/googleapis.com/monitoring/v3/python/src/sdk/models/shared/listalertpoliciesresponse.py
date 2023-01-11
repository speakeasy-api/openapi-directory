import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import alertpolicy as shared_alertpolicy


@dataclass_json
@dataclasses.dataclass
class ListAlertPoliciesResponse:
    r"""ListAlertPoliciesResponse
    The protocol for the ListAlertPolicies response.
    """
    
    alert_policies: Optional[list[shared_alertpolicy.AlertPolicy]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('alertPolicies') }})
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    total_size: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalSize') }})
    
