import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import v3_disruption as shared_v3_disruption
from ..shared import v3_status as shared_v3_status


@dataclass_json
@dataclasses.dataclass
class V3DisruptionResponse:
    disruption: Optional[shared_v3_disruption.V3Disruption] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('disruption') }})
    status: Optional[shared_v3_status.V3Status] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    
