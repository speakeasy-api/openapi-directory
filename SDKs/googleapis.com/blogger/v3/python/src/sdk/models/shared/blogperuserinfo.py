import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class BlogPerUserInfoRoleEnum(str, Enum):
    VIEW_TYPE_UNSPECIFIED = "VIEW_TYPE_UNSPECIFIED"
    READER = "READER"
    AUTHOR = "AUTHOR"
    ADMIN = "ADMIN"


@dataclass_json
@dataclasses.dataclass
class BlogPerUserInfo:
    blog_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('blogId') }})
    has_admin_access: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hasAdminAccess') }})
    kind: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    photos_album_key: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('photosAlbumKey') }})
    role: Optional[BlogPerUserInfoRoleEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('role') }})
    user_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userId') }})
    
