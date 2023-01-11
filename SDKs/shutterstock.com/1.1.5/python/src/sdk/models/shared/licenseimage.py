import dataclasses
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import cookie as shared_cookie
from ..shared import customsizedimensions as shared_customsizedimensions

class LicenseImageFormatEnum(str, Enum):
    JPG = "jpg"
    EPS = "eps"

class LicenseImageSizeEnum(str, Enum):
    SMALL = "small"
    MEDIUM = "medium"
    HUGE = "huge"
    VECTOR = "vector"
    CUSTOM = "custom"


@dataclass_json
@dataclasses.dataclass
class LicenseImage:
    r"""LicenseImage
    Data required to license an image
    """
    
    image_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('image_id') }})
    auth_cookie: Optional[shared_cookie.Cookie] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('auth_cookie') }})
    custom_dimensions: Optional[shared_customsizedimensions.CustomSizeDimensions] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('custom_dimensions') }})
    editorial_acknowledgement: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('editorial_acknowledgement') }})
    format: Optional[LicenseImageFormatEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('format') }})
    metadata: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metadata') }})
    price: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('price') }})
    search_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('search_id') }})
    show_modal: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('show_modal') }})
    size: Optional[LicenseImageSizeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('size') }})
    subscription_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subscription_id') }})
    verification_code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('verification_code') }})
    
