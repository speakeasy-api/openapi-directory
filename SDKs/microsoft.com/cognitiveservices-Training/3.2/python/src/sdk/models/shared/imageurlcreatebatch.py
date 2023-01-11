import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import imageurlcreateentry as shared_imageurlcreateentry


@dataclass_json
@dataclasses.dataclass
class ImageURLCreateBatch:
    images: Optional[list[shared_imageurlcreateentry.ImageURLCreateEntry]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('images') }})
    tag_ids: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tagIds') }})
    
