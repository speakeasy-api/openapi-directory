import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import category as shared_category


@dataclass_json
@dataclasses.dataclass
class ListCategoriesResponse:
    r"""ListCategoriesResponse
    Response message for BusinessCategories.ListCategories.
    """
    
    categories: Optional[list[shared_category.Category]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('categories') }})
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
