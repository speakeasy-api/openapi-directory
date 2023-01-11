import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import categoryresource as shared_categoryresource


@dataclass_json
@dataclasses.dataclass
class GetCategoryResponse:
    r"""GetCategoryResponse
    Successful response to get a single category and its ancestry.
    
    """
    
    data: shared_categoryresource.CategoryResource = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    
