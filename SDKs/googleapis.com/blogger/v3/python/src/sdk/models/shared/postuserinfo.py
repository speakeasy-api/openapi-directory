import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import post as shared_post
from ..shared import postperuserinfo as shared_postperuserinfo


@dataclass_json
@dataclasses.dataclass
class PostUserInfo:
    kind: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    post: Optional[shared_post.Post] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('post') }})
    post_user_info: Optional[shared_postperuserinfo.PostPerUserInfo] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('post_user_info') }})
    
