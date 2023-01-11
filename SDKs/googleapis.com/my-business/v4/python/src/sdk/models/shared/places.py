import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import placeinfo as shared_placeinfo


@dataclass_json
@dataclasses.dataclass
class Places:
    r"""Places
    Defines the union of areas represented by a set of places.
    """
    
    place_infos: Optional[list[shared_placeinfo.PlaceInfo]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('placeInfos') }})
    
