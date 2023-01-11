import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googletypemoney as shared_googletypemoney


@dataclass_json
@dataclasses.dataclass
class GoogleCloudRecommenderV1beta1CostProjection:
    r"""GoogleCloudRecommenderV1beta1CostProjection
    Contains metadata about how much money a recommendation can save or incur.
    """
    
    cost: Optional[shared_googletypemoney.GoogleTypeMoney] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cost') }})
    duration: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('duration') }})
    
