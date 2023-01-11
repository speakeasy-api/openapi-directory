import dataclasses
from typing import Optional
from ..shared import developercomment as shared_developercomment
from ..shared import usercomment as shared_usercomment


@dataclasses.dataclass
class Comment:
    developer_comment: Optional[shared_developercomment.DeveloperComment] = dataclasses.field(default=None)
    user_comment: Optional[shared_usercomment.UserComment] = dataclasses.field(default=None)
    
