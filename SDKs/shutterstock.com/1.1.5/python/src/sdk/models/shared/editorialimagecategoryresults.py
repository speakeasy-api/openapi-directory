import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import editorialcategory as shared_editorialcategory


@dataclass_json
@dataclasses.dataclass
class EditorialImageCategoryResults:
    r"""EditorialImageCategoryResults
    List of editorial categories
    """
    
    data: Optional[list[shared_editorialcategory.EditorialCategory]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    
