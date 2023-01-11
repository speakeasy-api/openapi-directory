import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import articleandparentcomment as shared_articleandparentcomment
from ..shared import textentry as shared_textentry


@dataclass_json
@dataclasses.dataclass
class Context:
    r"""Context
    Context is typically something that a Comment is referencing or replying to (such as an article, or previous comment). Note: Populate only ONE OF the following fields. The oneof syntax cannot be used because that would require nesting entries inside another message and breaking backwards compatibility. The server will return an error if more than one of the following fields is present.
    """
    
    article_and_parent_comment: Optional[shared_articleandparentcomment.ArticleAndParentComment] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('articleAndParentComment') }})
    entries: Optional[list[shared_textentry.TextEntry]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('entries') }})
    
