import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import v3_departure as shared_v3_departure
from ..shared import v3_direction as shared_v3_direction
from ..shared import v3_disruption as shared_v3_disruption
from ..shared import v3_run as shared_v3_run
from ..shared import v3_status as shared_v3_status
from ..shared import v3_stopmodel as shared_v3_stopmodel


@dataclass_json
@dataclasses.dataclass
class V3DeparturesResponse:
    departures: Optional[list[shared_v3_departure.V3Departure]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('departures') }})
    directions: Optional[dict[str, shared_v3_direction.V3Direction]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('directions') }})
    disruptions: Optional[dict[str, shared_v3_disruption.V3Disruption]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('disruptions') }})
    routes: Optional[dict[str, dict[str, Any]]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('routes') }})
    runs: Optional[dict[str, shared_v3_run.V3Run]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('runs') }})
    status: Optional[shared_v3_status.V3Status] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    stops: Optional[dict[str, shared_v3_stopmodel.V3StopModel]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stops') }})
    
