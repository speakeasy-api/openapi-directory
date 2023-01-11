import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import imagetagcreateentry as shared_imagetagcreateentry


@dataclass_json
@dataclasses.dataclass
class ImageTagCreateBatch:
    tags: Optional[list[shared_imagetagcreateentry.ImageTagCreateEntry]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    
