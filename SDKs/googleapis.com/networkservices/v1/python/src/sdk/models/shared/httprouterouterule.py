import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import httprouterouteaction as shared_httprouterouteaction
from ..shared import httprouteroutematch as shared_httprouteroutematch


@dataclass_json
@dataclasses.dataclass
class HTTPRouteRouteRule:
    r"""HTTPRouteRouteRule
    Specifies how to match traffic and how to route traffic when traffic is matched.
    """
    
    action: Optional[shared_httprouterouteaction.HTTPRouteRouteAction] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    matches: Optional[list[shared_httprouteroutematch.HTTPRouteRouteMatch]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('matches') }})
    
