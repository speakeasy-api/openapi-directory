import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import category as shared_category


@dataclass_json
@dataclasses.dataclass
class BatchGetBusinessCategoriesResponse:
    r"""BatchGetBusinessCategoriesResponse
    Response message for BusinessCategories.BatchGetBusinessCategories.
    """
    
    categories: Optional[list[shared_category.Category]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('categories') }})
    
