import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class EdgeLocation:
    r"""EdgeLocation
    Representation of a network edge location as per https://cloud.google.com/vpc/docs/edge-locations.
    """
    
    metropolitan_area: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metropolitanArea') }})
    
