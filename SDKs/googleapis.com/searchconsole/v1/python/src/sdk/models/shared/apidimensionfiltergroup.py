import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import apidimensionfilter as shared_apidimensionfilter

class APIDimensionFilterGroupGroupTypeEnum(str, Enum):
    AND = "AND"


@dataclass_json
@dataclasses.dataclass
class APIDimensionFilterGroup:
    r"""APIDimensionFilterGroup
    A set of dimension value filters to test against each row. Only rows that pass all filter groups will be returned. All results within a filter group are either AND'ed or OR'ed together, depending on the group type selected. All filter groups are AND'ed together.
    """
    
    filters: Optional[list[shared_apidimensionfilter.APIDimensionFilter]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('filters') }})
    group_type: Optional[APIDimensionFilterGroupGroupTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('groupType') }})
    
