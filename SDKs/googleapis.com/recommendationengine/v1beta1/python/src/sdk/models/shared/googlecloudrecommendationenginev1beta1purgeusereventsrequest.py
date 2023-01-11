import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class GoogleCloudRecommendationengineV1beta1PurgeUserEventsRequest:
    r"""GoogleCloudRecommendationengineV1beta1PurgeUserEventsRequest
    Request message for PurgeUserEvents method.
    """
    
    filter: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('filter') }})
    force: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('force') }})
    
