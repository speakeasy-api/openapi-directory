import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import inboundssoassignment as shared_inboundssoassignment


@dataclass_json
@dataclasses.dataclass
class ListInboundSsoAssignmentsResponse:
    r"""ListInboundSsoAssignmentsResponse
    Response of the InboundSsoAssignmentsService.ListInboundSsoAssignments method.
    """
    
    inbound_sso_assignments: Optional[list[shared_inboundssoassignment.InboundSsoAssignment]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inboundSsoAssignments') }})
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
