import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import developercomment as shared_developercomment
from ..shared import usercomment as shared_usercomment


@dataclass_json
@dataclasses.dataclass
class Comment:
    r"""Comment
    An entry of conversation between user and developer.
    """
    
    developer_comment: Optional[shared_developercomment.DeveloperComment] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('developerComment') }})
    user_comment: Optional[shared_usercomment.UserComment] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userComment') }})
    
