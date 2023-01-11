import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import responseinfo as shared_responseinfo
from ..shared import routeresponsepath as shared_routeresponsepath


@dataclass_json
@dataclasses.dataclass
class RouteResponse:
    info: Optional[shared_responseinfo.ResponseInfo] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('info') }})
    paths: Optional[list[shared_routeresponsepath.RouteResponsePath]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('paths') }})
    
