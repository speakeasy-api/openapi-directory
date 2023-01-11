import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import move as shared_move
from ..shared import permissionchange as shared_permissionchange
from ..shared import rename as shared_rename
from ..shared import target as shared_target
from ..shared import user as shared_user

class EventAdditionalEventTypesEnum(str, Enum):
    COMMENT = "comment"
    CREATE = "create"
    EDIT = "edit"
    EMPTY_TRASH = "emptyTrash"
    MOVE = "move"
    PERMISSION_CHANGE = "permissionChange"
    RENAME = "rename"
    TRASH = "trash"
    UNKNOWN = "unknown"
    UNTRASH = "untrash"
    UPLOAD = "upload"

class EventPrimaryEventTypeEnum(str, Enum):
    COMMENT = "comment"
    CREATE = "create"
    EDIT = "edit"
    EMPTY_TRASH = "emptyTrash"
    MOVE = "move"
    PERMISSION_CHANGE = "permissionChange"
    RENAME = "rename"
    TRASH = "trash"
    UNKNOWN = "unknown"
    UNTRASH = "untrash"
    UPLOAD = "upload"


@dataclass_json
@dataclasses.dataclass
class Event:
    r"""Event
    Represents the changes associated with an action taken by a user.
    """
    
    additional_event_types: Optional[list[EventAdditionalEventTypesEnum]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('additionalEventTypes') }})
    event_time_millis: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('eventTimeMillis') }})
    from_user_deletion: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fromUserDeletion') }})
    move: Optional[shared_move.Move] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('move') }})
    permission_changes: Optional[list[shared_permissionchange.PermissionChange]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('permissionChanges') }})
    primary_event_type: Optional[EventPrimaryEventTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('primaryEventType') }})
    rename: Optional[shared_rename.Rename] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rename') }})
    target: Optional[shared_target.Target] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('target') }})
    user: Optional[shared_user.User] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('user') }})
    
