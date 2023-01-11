import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import v3_routetype as shared_v3_routetype
from ..shared import v3_status as shared_v3_status


@dataclass_json
@dataclasses.dataclass
class V3RouteTypesResponse:
    route_types: Optional[list[shared_v3_routetype.V3RouteType]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('route_types') }})
    status: Optional[shared_v3_status.V3Status] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    
