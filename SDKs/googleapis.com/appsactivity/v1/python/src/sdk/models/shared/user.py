import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import photo as shared_photo


@dataclass_json
@dataclasses.dataclass
class User:
    r"""User
    A representation of a user.
    """
    
    is_deleted: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isDeleted') }})
    is_me: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isMe') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    permission_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('permissionId') }})
    photo: Optional[shared_photo.Photo] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('photo') }})
    
