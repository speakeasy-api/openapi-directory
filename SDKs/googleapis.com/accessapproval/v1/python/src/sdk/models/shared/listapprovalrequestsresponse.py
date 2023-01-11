import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import approvalrequest as shared_approvalrequest


@dataclass_json
@dataclasses.dataclass
class ListApprovalRequestsResponse:
    r"""ListApprovalRequestsResponse
    Response to listing of ApprovalRequest objects.
    """
    
    approval_requests: Optional[list[shared_approvalrequest.ApprovalRequest]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('approvalRequests') }})
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
