import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import fixedbidstrategy as shared_fixedbidstrategy
from ..shared import maximizespendbidstrategy as shared_maximizespendbidstrategy
from ..shared import performancegoalbidstrategy as shared_performancegoalbidstrategy


@dataclass_json
@dataclasses.dataclass
class BiddingStrategy:
    r"""BiddingStrategy
    Settings that control the bid strategy. Bid strategy determines the bid price.
    """
    
    fixed_bid: Optional[shared_fixedbidstrategy.FixedBidStrategy] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fixedBid') }})
    maximize_spend_auto_bid: Optional[shared_maximizespendbidstrategy.MaximizeSpendBidStrategy] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maximizeSpendAutoBid') }})
    performance_goal_auto_bid: Optional[shared_performancegoalbidstrategy.PerformanceGoalBidStrategy] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('performanceGoalAutoBid') }})
    
