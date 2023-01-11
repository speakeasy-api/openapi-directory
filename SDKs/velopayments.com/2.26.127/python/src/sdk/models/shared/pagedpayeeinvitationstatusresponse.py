import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import payeeinvitationstatusresponse as shared_payeeinvitationstatusresponse


@dataclass_json
@dataclasses.dataclass
class PagedPayeeInvitationStatusResponse:
    r"""PagedPayeeInvitationStatusResponse
    List Payees Invitation Status Object
    """
    
    content: Optional[list[shared_payeeinvitationstatusresponse.PayeeInvitationStatusResponse]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('content') }})
    links: Optional[list[Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('links') }})
    page: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page') }})
    
