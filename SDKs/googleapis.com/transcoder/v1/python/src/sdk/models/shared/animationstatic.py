import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import normalizedcoordinate as shared_normalizedcoordinate


@dataclass_json
@dataclasses.dataclass
class AnimationStatic:
    r"""AnimationStatic
    Display static overlay object.
    """
    
    start_time_offset: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('startTimeOffset') }})
    xy: Optional[shared_normalizedcoordinate.NormalizedCoordinate] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('xy') }})
    
