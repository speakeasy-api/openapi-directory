import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import tlsrouteroutedestination as shared_tlsrouteroutedestination


@dataclass_json
@dataclasses.dataclass
class TLSRouteRouteAction:
    r"""TLSRouteRouteAction
    The specifications for routing traffic and applying associated policies.
    """
    
    destinations: Optional[list[shared_tlsrouteroutedestination.TLSRouteRouteDestination]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('destinations') }})
    
