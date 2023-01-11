import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import imagesizedetails as shared_imagesizedetails
from ..shared import thumbnail as shared_thumbnail


@dataclass_json
@dataclasses.dataclass
class EditorialAssets:
    r"""EditorialAssets
    Asset information, including size and thumbnail URLs
    """
    
    medium_jpg: Optional[shared_imagesizedetails.ImageSizeDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('medium_jpg') }})
    original: Optional[shared_imagesizedetails.ImageSizeDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('original') }})
    small_jpg: Optional[shared_imagesizedetails.ImageSizeDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('small_jpg') }})
    thumb_170: Optional[shared_thumbnail.Thumbnail] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('thumb_170') }})
    thumb_220: Optional[shared_thumbnail.Thumbnail] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('thumb_220') }})
    watermark_1500: Optional[shared_thumbnail.Thumbnail] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('watermark_1500') }})
    watermark_450: Optional[shared_thumbnail.Thumbnail] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('watermark_450') }})
    
