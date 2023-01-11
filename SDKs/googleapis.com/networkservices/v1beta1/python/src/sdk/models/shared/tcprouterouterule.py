import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import tcprouterouteaction as shared_tcprouterouteaction
from ..shared import tcprouteroutematch as shared_tcprouteroutematch


@dataclass_json
@dataclasses.dataclass
class TCPRouteRouteRule:
    r"""TCPRouteRouteRule
    Specifies how to match traffic and how to route traffic when traffic is matched.
    """
    
    action: Optional[shared_tcprouterouteaction.TCPRouteRouteAction] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    matches: Optional[list[shared_tcprouteroutematch.TCPRouteRouteMatch]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('matches') }})
    
