import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import cookie as shared_cookie

class RedownloadImageSizeEnum(str, Enum):
    SMALL = "small"
    MEDIUM = "medium"
    HUGE = "huge"
    SUPERSIZE = "supersize"
    VECTOR = "vector"


@dataclass_json
@dataclasses.dataclass
class RedownloadImage:
    r"""RedownloadImage
    Data required to redownload an image
    """
    
    auth_cookie: Optional[shared_cookie.Cookie] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('auth_cookie') }})
    show_modal: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('show_modal') }})
    size: Optional[RedownloadImageSizeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('size') }})
    verification_code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('verification_code') }})
    
