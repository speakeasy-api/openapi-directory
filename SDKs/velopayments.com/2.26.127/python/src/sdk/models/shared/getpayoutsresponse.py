import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import payoutsummaryaudit as shared_payoutsummaryaudit


@dataclass_json
@dataclasses.dataclass
class GetPayoutsResponse:
    r"""GetPayoutsResponse
    List Payouts Response
    """
    
    content: Optional[list[shared_payoutsummaryaudit.PayoutSummaryAudit]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('content') }})
    links: Optional[list[Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('links') }})
    page: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page') }})
    
