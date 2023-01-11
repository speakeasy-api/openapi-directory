import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import appointmentphonenumber as shared_appointmentphonenumber
from ..shared import detailedserviceemailcontact as shared_detailedserviceemailcontact
from ..shared import detailedservicehours as shared_detailedservicehours
from ..shared import detailedserviceaddress as shared_detailedserviceaddress


@dataclass_json
@dataclasses.dataclass
class DetailedServiceLocation:
    r"""DetailedServiceLocation
    Details for a location offering a service.
    """
    
    additional_hours_info: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('additional_hours_info') }})
    appointment_phones: Optional[list[shared_appointmentphonenumber.AppointmentPhoneNumber]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('appointment_phones') }})
    email_contacts: Optional[list[shared_detailedserviceemailcontact.DetailedServiceEmailContact]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('email_contacts') }})
    facility_service_hours: Optional[shared_detailedservicehours.DetailedServiceHours] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('facility_service_hours') }})
    service_location_address: Optional[shared_detailedserviceaddress.DetailedServiceAddress] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('service_location_address') }})
    
