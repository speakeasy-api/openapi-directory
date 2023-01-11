import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import imagefilecreateentry as shared_imagefilecreateentry


@dataclass_json
@dataclasses.dataclass
class ImageFileCreateBatch:
    images: Optional[list[shared_imagefilecreateentry.ImageFileCreateEntry]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('images') }})
    tag_ids: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tagIds') }})
    
