import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import appointmentphonenumber as shared_appointmentphonenumber
from ..shared import detailedservicelocation as shared_detailedservicelocation


@dataclass_json
@dataclasses.dataclass
class DetailedService:
    r"""DetailedService
    Detailed information of a facility service.
    """
    
    appointment_leadin: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('appointment_leadin') }})
    appointment_phones: Optional[list[shared_appointmentphonenumber.AppointmentPhoneNumber]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('appointment_phones') }})
    description_facility: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description_facility') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    online_scheduling_available: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('online_scheduling_available') }})
    path: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('path') }})
    referral_required: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('referral_required') }})
    service_locations: Optional[list[shared_detailedservicelocation.DetailedServiceLocation]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('service_locations') }})
    walk_ins_accepted: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('walk_ins_accepted') }})
    
