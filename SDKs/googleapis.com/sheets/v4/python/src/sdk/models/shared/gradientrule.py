import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import interpolationpoint as shared_interpolationpoint


@dataclass_json
@dataclasses.dataclass
class GradientRule:
    r"""GradientRule
    A rule that applies a gradient color scale format, based on the interpolation points listed. The format of a cell will vary based on its contents as compared to the values of the interpolation points.
    """
    
    maxpoint: Optional[shared_interpolationpoint.InterpolationPoint] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxpoint') }})
    midpoint: Optional[shared_interpolationpoint.InterpolationPoint] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('midpoint') }})
    minpoint: Optional[shared_interpolationpoint.InterpolationPoint] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('minpoint') }})
    
