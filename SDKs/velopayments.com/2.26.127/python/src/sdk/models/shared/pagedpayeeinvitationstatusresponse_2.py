import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import payeeinvitationstatusresponse_2 as shared_payeeinvitationstatusresponse_2


@dataclass_json
@dataclasses.dataclass
class PagedPayeeInvitationStatusResponse2:
    r"""PagedPayeeInvitationStatusResponse2
    List Payees Invitation Status Object
    """
    
    content: Optional[list[shared_payeeinvitationstatusresponse_2.PayeeInvitationStatusResponse2]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('content') }})
    links: Optional[list[Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('links') }})
    page: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page') }})
    
