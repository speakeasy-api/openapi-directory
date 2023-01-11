import dataclasses
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class VehicleTypeNetworkDataProviderEnum(str, Enum):
    OPENSTREETMAP = "openstreetmap"
    TOMTOM = "tomtom"


@dataclass_json
@dataclasses.dataclass
class VehicleType:
    type_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type_id') }})
    capacity: Optional[list[int]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('capacity') }})
    consider_traffic: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('consider_traffic') }})
    cost_per_activation: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cost_per_activation') }})
    cost_per_meter: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cost_per_meter') }})
    cost_per_second: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cost_per_second') }})
    network_data_provider: Optional[VehicleTypeNetworkDataProviderEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('network_data_provider') }})
    profile: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('profile') }})
    service_time_factor: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('service_time_factor') }})
    speed_factor: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('speed_factor') }})
    
