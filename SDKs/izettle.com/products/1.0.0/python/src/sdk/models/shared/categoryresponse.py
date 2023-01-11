import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import categorydto as shared_categorydto


@dataclass_json
@dataclasses.dataclass
class CategoryResponse:
    categories: list[shared_categorydto.CategoryDto] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('categories') }})
    
