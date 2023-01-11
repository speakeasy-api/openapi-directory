import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import duplicate as shared_duplicate


@dataclass_json
@dataclasses.dataclass
class Metadata:
    r"""Metadata
    Additional non-user-editable information about the location.
    """
    
    duplicate: Optional[shared_duplicate.Duplicate] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('duplicate') }})
    maps_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mapsUrl') }})
    new_review_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('newReviewUrl') }})
    
