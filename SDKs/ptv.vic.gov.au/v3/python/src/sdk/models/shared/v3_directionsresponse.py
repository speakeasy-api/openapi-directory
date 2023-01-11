import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import v3_directionwithdescription as shared_v3_directionwithdescription
from ..shared import v3_status as shared_v3_status


@dataclass_json
@dataclasses.dataclass
class V3DirectionsResponse:
    directions: Optional[list[shared_v3_directionwithdescription.V3DirectionWithDescription]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('directions') }})
    status: Optional[shared_v3_status.V3Status] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    
