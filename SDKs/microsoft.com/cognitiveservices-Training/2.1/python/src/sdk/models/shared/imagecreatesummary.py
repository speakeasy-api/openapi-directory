import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import imagecreateresult as shared_imagecreateresult


@dataclass_json
@dataclasses.dataclass
class ImageCreateSummary:
    images: Optional[list[shared_imagecreateresult.ImageCreateResult]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('images') }})
    is_batch_successful: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isBatchSuccessful') }})
    
