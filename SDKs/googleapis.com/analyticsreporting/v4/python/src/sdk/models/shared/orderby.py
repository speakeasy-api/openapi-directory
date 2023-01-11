import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class OrderByOrderTypeEnum(str, Enum):
    ORDER_TYPE_UNSPECIFIED = "ORDER_TYPE_UNSPECIFIED"
    VALUE = "VALUE"
    DELTA = "DELTA"
    SMART = "SMART"
    HISTOGRAM_BUCKET = "HISTOGRAM_BUCKET"
    DIMENSION_AS_INTEGER = "DIMENSION_AS_INTEGER"

class OrderBySortOrderEnum(str, Enum):
    SORT_ORDER_UNSPECIFIED = "SORT_ORDER_UNSPECIFIED"
    ASCENDING = "ASCENDING"
    DESCENDING = "DESCENDING"


@dataclass_json
@dataclasses.dataclass
class OrderBy:
    r"""OrderBy
    Specifies the sorting options.
    """
    
    field_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fieldName') }})
    order_type: Optional[OrderByOrderTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('orderType') }})
    sort_order: Optional[OrderBySortOrderEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sortOrder') }})
    
