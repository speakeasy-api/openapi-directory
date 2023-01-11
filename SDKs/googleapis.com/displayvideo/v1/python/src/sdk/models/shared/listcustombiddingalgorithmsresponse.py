import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import custombiddingalgorithm as shared_custombiddingalgorithm


@dataclass_json
@dataclasses.dataclass
class ListCustomBiddingAlgorithmsResponse:
    custom_bidding_algorithms: Optional[list[shared_custombiddingalgorithm.CustomBiddingAlgorithm]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customBiddingAlgorithms') }})
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
