import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import thumbnail as shared_thumbnail


@dataclass_json
@dataclasses.dataclass
class ThumbnailDetails:
    r"""ThumbnailDetails
    Internal representation of thumbnails for a YouTube resource.
    """
    
    high: Optional[shared_thumbnail.Thumbnail] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('high') }})
    maxres: Optional[shared_thumbnail.Thumbnail] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxres') }})
    medium: Optional[shared_thumbnail.Thumbnail] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('medium') }})
    standard: Optional[shared_thumbnail.Thumbnail] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('standard') }})
    
