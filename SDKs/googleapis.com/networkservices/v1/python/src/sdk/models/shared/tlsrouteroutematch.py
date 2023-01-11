import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class TLSRouteRouteMatch:
    r"""TLSRouteRouteMatch
    RouteMatch defines the predicate used to match requests to a given action. Multiple match types are \"AND\"ed for evaluation. If no routeMatch field is specified, this rule will unconditionally match traffic.
    """
    
    alpn: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('alpn') }})
    sni_host: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sniHost') }})
    
