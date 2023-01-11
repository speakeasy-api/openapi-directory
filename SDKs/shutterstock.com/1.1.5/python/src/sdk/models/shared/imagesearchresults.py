import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import image as shared_image


@dataclass_json
@dataclasses.dataclass
class ImageSearchResults:
    r"""ImageSearchResults
    Image search results
    """
    
    data: list[shared_image.Image] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    search_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('search_id') }})
    total_count: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total_count') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    page: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page') }})
    per_page: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('per_page') }})
    spellcheck_info: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('spellcheck_info') }})
    
