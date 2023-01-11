import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import projectbillinginfo as shared_projectbillinginfo


@dataclass_json
@dataclasses.dataclass
class ListProjectBillingInfoResponse:
    r"""ListProjectBillingInfoResponse
    Request message for `ListProjectBillingInfoResponse`.
    """
    
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    project_billing_info: Optional[list[shared_projectbillinginfo.ProjectBillingInfo]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('projectBillingInfo') }})
    
