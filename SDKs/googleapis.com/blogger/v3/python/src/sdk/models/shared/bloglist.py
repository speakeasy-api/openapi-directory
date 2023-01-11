import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import bloguserinfo as shared_bloguserinfo
from ..shared import blog as shared_blog


@dataclass_json
@dataclasses.dataclass
class BlogList:
    blog_user_infos: Optional[list[shared_bloguserinfo.BlogUserInfo]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('blogUserInfos') }})
    items: Optional[list[shared_blog.Blog]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('items') }})
    kind: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    
