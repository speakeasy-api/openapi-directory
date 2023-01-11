import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import tlsrouterouteaction as shared_tlsrouterouteaction
from ..shared import tlsrouteroutematch as shared_tlsrouteroutematch


@dataclass_json
@dataclasses.dataclass
class TLSRouteRouteRule:
    r"""TLSRouteRouteRule
    Specifies how to match traffic and how to route traffic when traffic is matched.
    """
    
    action: Optional[shared_tlsrouterouteaction.TLSRouteRouteAction] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    matches: Optional[list[shared_tlsrouteroutematch.TLSRouteRouteMatch]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('matches') }})
    
