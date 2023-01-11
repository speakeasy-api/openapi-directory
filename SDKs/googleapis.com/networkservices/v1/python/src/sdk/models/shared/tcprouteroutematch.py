import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class TCPRouteRouteMatch:
    r"""TCPRouteRouteMatch
    RouteMatch defines the predicate used to match requests to a given action. Multiple match types are \"OR\"ed for evaluation. If no routeMatch field is specified, this rule will unconditionally match traffic.
    """
    
    address: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('address') }})
    port: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('port') }})
    
