import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import v3_resultoutlet as shared_v3_resultoutlet
from ..shared import v3_resultroute as shared_v3_resultroute
from ..shared import v3_status as shared_v3_status
from ..shared import v3_resultstop as shared_v3_resultstop


@dataclass_json
@dataclasses.dataclass
class V3SearchResult:
    outlets: Optional[list[shared_v3_resultoutlet.V3ResultOutlet]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('outlets') }})
    routes: Optional[list[shared_v3_resultroute.V3ResultRoute]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('routes') }})
    status: Optional[shared_v3_status.V3Status] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    stops: Optional[list[shared_v3_resultstop.V3ResultStop]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stops') }})
    
