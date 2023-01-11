import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import v3_stopgps as shared_v3_stopgps


@dataclass_json
@dataclasses.dataclass
class V3StopLocation:
    gps: Optional[shared_v3_stopgps.V3StopGps] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gps') }})
    
