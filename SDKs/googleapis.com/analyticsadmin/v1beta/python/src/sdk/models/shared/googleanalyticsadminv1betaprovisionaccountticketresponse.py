import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class GoogleAnalyticsAdminV1betaProvisionAccountTicketResponse:
    r"""GoogleAnalyticsAdminV1betaProvisionAccountTicketResponse
    Response message for ProvisionAccountTicket RPC.
    """
    
    account_ticket_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accountTicketId') }})
    
