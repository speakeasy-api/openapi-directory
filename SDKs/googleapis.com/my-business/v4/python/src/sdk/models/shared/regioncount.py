import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import latlng as shared_latlng


@dataclass_json
@dataclasses.dataclass
class RegionCount:
    r"""RegionCount
    A region with its associated request count.
    """
    
    count: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('count') }})
    label: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('label') }})
    latlng: Optional[shared_latlng.LatLng] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('latlng') }})
    
