import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import grpcrouteheadermatch as shared_grpcrouteheadermatch
from ..shared import grpcroutemethodmatch as shared_grpcroutemethodmatch


@dataclass_json
@dataclasses.dataclass
class GrpcRouteRouteMatch:
    r"""GrpcRouteRouteMatch
    Criteria for matching traffic. A RouteMatch will be considered to match when all supplied fields match.
    """
    
    headers: Optional[list[shared_grpcrouteheadermatch.GrpcRouteHeaderMatch]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('headers') }})
    method: Optional[shared_grpcroutemethodmatch.GrpcRouteMethodMatch] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('method') }})
    
