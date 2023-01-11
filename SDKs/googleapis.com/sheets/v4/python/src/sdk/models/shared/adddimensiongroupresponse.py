import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import dimensiongroup as shared_dimensiongroup


@dataclass_json
@dataclasses.dataclass
class AddDimensionGroupResponse:
    r"""AddDimensionGroupResponse
    The result of adding a group.
    """
    
    dimension_groups: Optional[list[shared_dimensiongroup.DimensionGroup]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dimensionGroups') }})
    
