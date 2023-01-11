import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import placementstrategy as shared_placementstrategy


@dataclass_json
@dataclasses.dataclass
class PlacementStrategiesListResponse:
    r"""PlacementStrategiesListResponse
    Placement Strategy List Response
    """
    
    kind: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    placement_strategies: Optional[list[shared_placementstrategy.PlacementStrategy]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('placementStrategies') }})
    
