import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import availabilityinputmodel as shared_availabilityinputmodel
from ..shared import servicefeesinputmodel as shared_servicefeesinputmodel
from ..shared import serviceoptionsinputmodel as shared_serviceoptionsinputmodel
from ..shared import servicesettingsinputmodel as shared_servicesettingsinputmodel


@dataclass_json
@dataclasses.dataclass
class ServiceInputModel:
    availability: Optional[shared_availabilityinputmodel.AvailabilityInputModel] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('availability') }})
    booking_interval: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bookingInterval') }})
    booking_limit: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bookingLimit') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    duration: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('duration') }})
    fees: Optional[shared_servicefeesinputmodel.ServiceFeesInputModel] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fees') }})
    location_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('locationId') }})
    max_capacity: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxCapacity') }})
    max_group_size: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxGroupSize') }})
    media_page_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mediaPageUrl') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    options: Optional[shared_serviceoptionsinputmodel.ServiceOptionsInputModel] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    public: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('public') }})
    service_group_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serviceGroupId') }})
    settings: Optional[shared_servicesettingsinputmodel.ServiceSettingsInputModel] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('settings') }})
    type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
