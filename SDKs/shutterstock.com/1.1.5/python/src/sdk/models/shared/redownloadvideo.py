import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import cookie as shared_cookie

class RedownloadVideoSizeEnum(str, Enum):
    WEB = "web"
    SD = "sd"
    HD = "hd"
    FOURK = "4k"


@dataclass_json
@dataclasses.dataclass
class RedownloadVideo:
    r"""RedownloadVideo
    Data required to redownload a video
    """
    
    auth_cookie: Optional[shared_cookie.Cookie] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('auth_cookie') }})
    show_modal: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('show_modal') }})
    size: Optional[RedownloadVideoSizeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('size') }})
    verification_code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('verification_code') }})
    
