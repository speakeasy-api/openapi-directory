import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import addresses as shared_addresses
from ..shared import detailedservice as shared_detailedservice
from ..shared import hours as shared_hours
from ..shared import operatingstatus as shared_operatingstatus
from ..shared import phone as shared_phone
from ..shared import satisfaction as shared_satisfaction
from ..shared import services as shared_services
from ..shared import waittimes as shared_waittimes

class FacilityAttributesActiveStatusEnum(str, Enum):
    A = "A"
    T = "T"

class FacilityAttributesFacilityTypeEnum(str, Enum):
    VA_BENEFITS_FACILITY = "va_benefits_facility"
    VA_CEMETERY = "va_cemetery"
    VA_HEALTH_FACILITY = "va_health_facility"
    VET_CENTER = "vet_center"


@dataclass_json
@dataclasses.dataclass
class FacilityAttributes:
    facility_type: FacilityAttributesFacilityTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('facility_type') }})
    lat: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('lat') }})
    long: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('long') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    operating_status: shared_operatingstatus.OperatingStatus = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('operating_status') }})
    active_status: Optional[FacilityAttributesActiveStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('active_status') }})
    address: Optional[shared_addresses.Addresses] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('address') }})
    classification: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('classification') }})
    detailed_services: Optional[list[shared_detailedservice.DetailedService]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('detailed_services') }})
    hours: Optional[shared_hours.Hours] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hours') }})
    mobile: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mobile') }})
    operational_hours_special_instructions: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('operational_hours_special_instructions') }})
    phone: Optional[shared_phone.Phone] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('phone') }})
    satisfaction: Optional[shared_satisfaction.Satisfaction] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('satisfaction') }})
    services: Optional[shared_services.Services] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('services') }})
    time_zone: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('time_zone') }})
    visn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('visn') }})
    wait_times: Optional[shared_waittimes.WaitTimes] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('wait_times') }})
    website: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('website') }})
    
