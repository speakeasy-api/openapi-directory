import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import deal as shared_deal
from ..shared import dealpausinginfo as shared_dealpausinginfo
from ..shared import rtbmetrics as shared_rtbmetrics

class FinalizedDealDealServingStatusEnum(str, Enum):
    DEAL_SERVING_STATUS_UNSPECIFIED = "DEAL_SERVING_STATUS_UNSPECIFIED"
    ACTIVE = "ACTIVE"
    ENDED = "ENDED"
    PAUSED_BY_BUYER = "PAUSED_BY_BUYER"
    PAUSED_BY_SELLER = "PAUSED_BY_SELLER"


@dataclass_json
@dataclasses.dataclass
class FinalizedDeal:
    r"""FinalizedDeal
    A finalized deal is a snapshot of the deal when both buyer and seller accept the deal. The buyer or seller can update the deal after it's been finalized and renegotiate on the deal targeting, terms and other fields, while at the same time the finalized snapshot of the deal can still be retrieved using this API. The finalized deal contains a copy of the deal as it existed when most recently finalized, as well as fields related to deal serving such as pause/resume status, RTB metrics, and more.
    """
    
    deal: Optional[shared_deal.Deal] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deal') }})
    deal_pausing_info: Optional[shared_dealpausinginfo.DealPausingInfo] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dealPausingInfo') }})
    deal_serving_status: Optional[FinalizedDealDealServingStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dealServingStatus') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    ready_to_serve: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('readyToServe') }})
    rtb_metrics: Optional[shared_rtbmetrics.RtbMetrics] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rtbMetrics') }})
    
