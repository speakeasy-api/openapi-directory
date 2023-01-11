import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import blog as shared_blog
from ..shared import blogperuserinfo as shared_blogperuserinfo


@dataclass_json
@dataclasses.dataclass
class BlogUserInfo:
    blog: Optional[shared_blog.Blog] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('blog') }})
    blog_user_info: Optional[shared_blogperuserinfo.BlogPerUserInfo] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('blog_user_info') }})
    kind: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    
