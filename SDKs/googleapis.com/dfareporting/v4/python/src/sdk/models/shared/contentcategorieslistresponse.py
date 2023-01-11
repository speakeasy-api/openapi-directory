import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import contentcategory as shared_contentcategory


@dataclass_json
@dataclasses.dataclass
class ContentCategoriesListResponse:
    r"""ContentCategoriesListResponse
    Content Category List Response
    """
    
    content_categories: Optional[list[shared_contentcategory.ContentCategory]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contentCategories') }})
    kind: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
