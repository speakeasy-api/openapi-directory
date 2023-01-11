import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import imagesizedetails as shared_imagesizedetails
from ..shared import thumbnail as shared_thumbnail


@dataclass_json
@dataclasses.dataclass
class ImageAssets:
    r"""ImageAssets
    Information about the assets that are part of an image
    """
    
    huge_jpg: Optional[shared_imagesizedetails.ImageSizeDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('huge_jpg') }})
    huge_thumb: Optional[shared_thumbnail.Thumbnail] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('huge_thumb') }})
    large_thumb: Optional[shared_thumbnail.Thumbnail] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('large_thumb') }})
    medium_jpg: Optional[shared_imagesizedetails.ImageSizeDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('medium_jpg') }})
    preview: Optional[shared_thumbnail.Thumbnail] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('preview') }})
    preview_1000: Optional[shared_thumbnail.Thumbnail] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('preview_1000') }})
    preview_1500: Optional[shared_thumbnail.Thumbnail] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('preview_1500') }})
    small_jpg: Optional[shared_imagesizedetails.ImageSizeDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('small_jpg') }})
    small_thumb: Optional[shared_thumbnail.Thumbnail] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('small_thumb') }})
    supersize_jpg: Optional[shared_imagesizedetails.ImageSizeDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('supersize_jpg') }})
    vector_eps: Optional[shared_imagesizedetails.ImageSizeDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vector_eps') }})
    
