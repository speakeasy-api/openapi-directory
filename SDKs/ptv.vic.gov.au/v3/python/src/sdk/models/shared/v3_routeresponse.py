import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import v3_status as shared_v3_status


@dataclass_json
@dataclasses.dataclass
class V3RouteResponse:
    route: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('route') }})
    status: Optional[shared_v3_status.V3Status] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    
