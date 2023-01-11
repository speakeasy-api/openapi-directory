import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import categoryresource as shared_categoryresource


@dataclass_json
@dataclasses.dataclass
class ListCategoriesResponse:
    r"""ListCategoriesResponse
    Successful response to get all categories and their ancestry. The
    returned list is not paginated.
    
    """
    
    data: list[shared_categoryresource.CategoryResource] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    
