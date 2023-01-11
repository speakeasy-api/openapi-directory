import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import morehourstype as shared_morehourstype
from ..shared import servicetype as shared_servicetype


@dataclass_json
@dataclasses.dataclass
class Category:
    r"""Category
    A category describing what this business is (not what it does). For a list of valid category IDs, and the mappings to their human-readable names, see [categories.list](https://developers.google.com/my-business/reference/rest/v4/categories/list).
    """
    
    category_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('categoryId') }})
    display_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    more_hours_types: Optional[list[shared_morehourstype.MoreHoursType]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('moreHoursTypes') }})
    service_types: Optional[list[shared_servicetype.ServiceType]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serviceTypes') }})
    

@dataclass_json
@dataclasses.dataclass
class CategoryInput:
    r"""CategoryInput
    A category describing what this business is (not what it does). For a list of valid category IDs, and the mappings to their human-readable names, see [categories.list](https://developers.google.com/my-business/reference/rest/v4/categories/list).
    """
    
    category_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('categoryId') }})
    display_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    
