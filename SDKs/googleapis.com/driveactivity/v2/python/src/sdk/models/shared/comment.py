import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import assignment as shared_assignment
from ..shared import user as shared_user
from ..shared import post as shared_post
from ..shared import suggestion as shared_suggestion


@dataclass_json
@dataclasses.dataclass
class Comment:
    r"""Comment
    A change about comments on an object.
    """
    
    assignment: Optional[shared_assignment.Assignment] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('assignment') }})
    mentioned_users: Optional[list[shared_user.User]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mentionedUsers') }})
    post: Optional[shared_post.Post] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('post') }})
    suggestion: Optional[shared_suggestion.Suggestion] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('suggestion') }})
    
