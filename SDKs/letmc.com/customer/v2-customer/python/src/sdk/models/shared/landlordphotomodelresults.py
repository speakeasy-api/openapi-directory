import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import landlordphotomodel as shared_landlordphotomodel


@dataclass_json
@dataclasses.dataclass
class LandlordPhotoModelResults:
    r"""LandlordPhotoModelResults
    Holds results from a paged query returning LandlordPhotoModel values
    """
    
    count: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Count') }})
    data: Optional[list[shared_landlordphotomodel.LandlordPhotoModel]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Data') }})
    
