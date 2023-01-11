import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import traffictarget as shared_traffictarget


@dataclass_json
@dataclasses.dataclass
class RouteSpec:
    r"""RouteSpec
    RouteSpec holds the desired state of the Route (from the client).
    """
    
    traffic: Optional[list[shared_traffictarget.TrafficTarget]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('traffic') }})
    
