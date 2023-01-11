import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import grpcrouterouteaction as shared_grpcrouterouteaction
from ..shared import grpcrouteroutematch as shared_grpcrouteroutematch


@dataclass_json
@dataclasses.dataclass
class GrpcRouteRouteRule:
    r"""GrpcRouteRouteRule
    Describes how to route traffic.
    """
    
    action: Optional[shared_grpcrouterouteaction.GrpcRouteRouteAction] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    matches: Optional[list[shared_grpcrouteroutematch.GrpcRouteRouteMatch]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('matches') }})
    
