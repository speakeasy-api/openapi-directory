import dataclasses
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import cookie as shared_cookie

class LicenseVideoSizeEnum(str, Enum):
    WEB = "web"
    SD = "sd"
    HD = "hd"
    FOURK = "4k"


@dataclass_json
@dataclasses.dataclass
class LicenseVideo:
    r"""LicenseVideo
    Data required to license a video
    """
    
    video_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('video_id') }})
    auth_cookie: Optional[shared_cookie.Cookie] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('auth_cookie') }})
    editorial_acknowledgement: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('editorial_acknowledgement') }})
    metadata: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metadata') }})
    price: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('price') }})
    search_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('search_id') }})
    show_modal: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('show_modal') }})
    size: Optional[LicenseVideoSizeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('size') }})
    subscription_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subscription_id') }})
    
