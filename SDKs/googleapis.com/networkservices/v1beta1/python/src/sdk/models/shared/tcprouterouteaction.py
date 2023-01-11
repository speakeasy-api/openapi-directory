import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import tcprouteroutedestination as shared_tcprouteroutedestination


@dataclass_json
@dataclasses.dataclass
class TCPRouteRouteAction:
    r"""TCPRouteRouteAction
    The specifications for routing traffic and applying associated policies.
    """
    
    destinations: Optional[list[shared_tcprouteroutedestination.TCPRouteRouteDestination]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('destinations') }})
    original_destination: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('originalDestination') }})
    
