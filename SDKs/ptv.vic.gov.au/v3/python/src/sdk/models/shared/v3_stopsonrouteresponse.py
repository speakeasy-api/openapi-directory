import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import v3_disruption as shared_v3_disruption
from ..shared import v3_status as shared_v3_status
from ..shared import v3_stoponroute as shared_v3_stoponroute


@dataclass_json
@dataclasses.dataclass
class V3StopsOnRouteResponse:
    disruptions: Optional[dict[str, shared_v3_disruption.V3Disruption]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('disruptions') }})
    geopath: Optional[list[dict[str, Any]]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('geopath') }})
    status: Optional[shared_v3_status.V3Status] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    stops: Optional[list[shared_v3_stoponroute.V3StopOnRoute]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stops') }})
    
