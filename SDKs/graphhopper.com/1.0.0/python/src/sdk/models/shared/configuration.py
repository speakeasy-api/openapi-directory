import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import routing as shared_routing


@dataclass_json
@dataclasses.dataclass
class Configuration:
    r"""Configuration
    Specifies general configurations that are taken into account when solving the vehicle routing problem.
    """
    
    routing: Optional[shared_routing.Routing] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('routing') }})
    
