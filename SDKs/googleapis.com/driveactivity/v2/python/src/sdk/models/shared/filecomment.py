import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import driveitem as shared_driveitem


@dataclass_json
@dataclasses.dataclass
class FileComment:
    r"""FileComment
    A comment on a file.
    """
    
    legacy_comment_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('legacyCommentId') }})
    legacy_discussion_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('legacyDiscussionId') }})
    link_to_discussion: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('linkToDiscussion') }})
    parent: Optional[shared_driveitem.DriveItem] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parent') }})
    
