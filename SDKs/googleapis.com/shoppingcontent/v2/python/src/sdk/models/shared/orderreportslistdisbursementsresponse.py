import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import orderreportdisbursement as shared_orderreportdisbursement


@dataclass_json
@dataclasses.dataclass
class OrderreportsListDisbursementsResponse:
    disbursements: Optional[list[shared_orderreportdisbursement.OrderReportDisbursement]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('disbursements') }})
    kind: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
