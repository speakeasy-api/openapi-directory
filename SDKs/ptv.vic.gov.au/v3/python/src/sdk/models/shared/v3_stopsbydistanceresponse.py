import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import v3_disruption as shared_v3_disruption
from ..shared import v3_status as shared_v3_status
from ..shared import v3_stopgeosearch as shared_v3_stopgeosearch


@dataclass_json
@dataclasses.dataclass
class V3StopsByDistanceResponse:
    disruptions: Optional[dict[str, shared_v3_disruption.V3Disruption]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('disruptions') }})
    status: Optional[shared_v3_status.V3Status] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    stops: Optional[list[shared_v3_stopgeosearch.V3StopGeosearch]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stops') }})
    
