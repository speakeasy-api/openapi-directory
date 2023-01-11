import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import v3_stopaccessibility as shared_v3_stopaccessibility
from ..shared import v3_stopamenitydetails as shared_v3_stopamenitydetails
from ..shared import v3_stoplocation as shared_v3_stoplocation
from ..shared import v3_stopstaffing as shared_v3_stopstaffing


@dataclass_json
@dataclasses.dataclass
class V3StopDetails:
    disruption_ids: Optional[list[int]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('disruption_ids') }})
    route_type: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('route_type') }})
    routes: Optional[list[dict[str, Any]]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('routes') }})
    station_description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('station_description') }})
    station_type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('station_type') }})
    stop_accessibility: Optional[shared_v3_stopaccessibility.V3StopAccessibility] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stop_accessibility') }})
    stop_amenities: Optional[shared_v3_stopamenitydetails.V3StopAmenityDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stop_amenities') }})
    stop_id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stop_id') }})
    stop_landmark: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stop_landmark') }})
    stop_location: Optional[shared_v3_stoplocation.V3StopLocation] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stop_location') }})
    stop_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stop_name') }})
    stop_staffing: Optional[shared_v3_stopstaffing.V3StopStaffing] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stop_staffing') }})
    
