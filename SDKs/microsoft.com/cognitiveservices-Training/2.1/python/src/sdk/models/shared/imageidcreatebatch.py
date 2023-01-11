import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import imageidcreateentry as shared_imageidcreateentry


@dataclass_json
@dataclasses.dataclass
class ImageIDCreateBatch:
    images: Optional[list[shared_imageidcreateentry.ImageIDCreateEntry]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('images') }})
    tag_ids: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tagIds') }})
    
