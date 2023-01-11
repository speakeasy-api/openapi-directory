import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import invoice as shared_invoice


@dataclass_json
@dataclasses.dataclass
class AdvertiserInvoicesListResponse:
    r"""AdvertiserInvoicesListResponse
    Invoice List Response
    """
    
    invoices: Optional[list[shared_invoice.Invoice]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('invoices') }})
    kind: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
