import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import addressupdatemodel as shared_addressupdatemodel
from ..shared import availabilityinputmodel as shared_availabilityinputmodel
from ..shared import contactupdatemodel as shared_contactupdatemodel
from ..shared import customfieldupdatemodel as shared_customfieldupdatemodel
from ..shared import resourceoptionsupdatemodel as shared_resourceoptionsupdatemodel


@dataclass_json
@dataclasses.dataclass
class ResourceUpdateModel:
    address: Optional[shared_addressupdatemodel.AddressUpdateModel] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('address') }})
    availability: Optional[shared_availabilityinputmodel.AvailabilityInputModel] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('availability') }})
    contact: Optional[shared_contactupdatemodel.ContactUpdateModel] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contact') }})
    custom_fields: Optional[shared_customfieldupdatemodel.CustomFieldUpdateModel] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customFields') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    email: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('email') }})
    group_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('groupId') }})
    location_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('locationId') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    options: Optional[shared_resourceoptionsupdatemodel.ResourceOptionsUpdateModel] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    service_ids: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serviceIds') }})
    timezone_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timezoneId') }})
    
