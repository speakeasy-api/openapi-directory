import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import payoutsummaryauditv3 as shared_payoutsummaryauditv3


@dataclass_json
@dataclasses.dataclass
class GetPayoutsResponseV3:
    r"""GetPayoutsResponseV3
    List Payouts Response
    """
    
    content: Optional[list[shared_payoutsummaryauditv3.PayoutSummaryAuditV3]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('content') }})
    links: Optional[list[Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('links') }})
    page: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page') }})
    
