import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import imageregioncreateentry as shared_imageregioncreateentry


@dataclass_json
@dataclasses.dataclass
class ImageRegionCreateBatch:
    r"""ImageRegionCreateBatch
    Batch of image region information to create.
    """
    
    regions: Optional[list[shared_imageregioncreateentry.ImageRegionCreateEntry]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('regions') }})
    
