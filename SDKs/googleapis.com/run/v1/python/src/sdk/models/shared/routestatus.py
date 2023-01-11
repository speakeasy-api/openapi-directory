import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import addressable as shared_addressable
from ..shared import googlecloudrunv1condition as shared_googlecloudrunv1condition
from ..shared import traffictarget as shared_traffictarget


@dataclass_json
@dataclasses.dataclass
class RouteStatus:
    r"""RouteStatus
    RouteStatus communicates the observed state of the Route (from the controller).
    """
    
    address: Optional[shared_addressable.Addressable] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('address') }})
    conditions: Optional[list[shared_googlecloudrunv1condition.GoogleCloudRunV1Condition]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('conditions') }})
    observed_generation: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('observedGeneration') }})
    traffic: Optional[list[shared_traffictarget.TrafficTarget]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('traffic') }})
    url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    
