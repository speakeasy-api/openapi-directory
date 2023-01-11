import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import image as shared_image

class ImageCreateResultStatusEnum(str, Enum):
    OK = "OK"
    OK_DUPLICATE = "OKDuplicate"
    ERROR_SOURCE = "ErrorSource"
    ERROR_IMAGE_FORMAT = "ErrorImageFormat"
    ERROR_IMAGE_SIZE = "ErrorImageSize"
    ERROR_STORAGE = "ErrorStorage"
    ERROR_LIMIT_EXCEED = "ErrorLimitExceed"
    ERROR_TAG_LIMIT_EXCEED = "ErrorTagLimitExceed"
    ERROR_REGION_LIMIT_EXCEED = "ErrorRegionLimitExceed"
    ERROR_UNKNOWN = "ErrorUnknown"


@dataclass_json
@dataclasses.dataclass
class ImageCreateResult:
    image: Optional[shared_image.Image] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('image') }})
    source_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sourceUrl') }})
    status: Optional[ImageCreateResultStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    
