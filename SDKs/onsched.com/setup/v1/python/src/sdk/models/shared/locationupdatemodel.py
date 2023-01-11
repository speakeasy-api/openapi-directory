import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import addressupdatemodel as shared_addressupdatemodel
from ..shared import businesshoursupdatemodel as shared_businesshoursupdatemodel
from ..shared import businessdefaultsupdatemodel as shared_businessdefaultsupdatemodel
from ..shared import onlinesettingsupdatemodel as shared_onlinesettingsupdatemodel


@dataclass_json
@dataclasses.dataclass
class LocationUpdateModel:
    address: Optional[shared_addressupdatemodel.AddressUpdateModel] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('address') }})
    admin_email: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('adminEmail') }})
    admin_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('adminName') }})
    business_hours: Optional[shared_businesshoursupdatemodel.BusinessHoursUpdateModel] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('businessHours') }})
    defaults: Optional[shared_businessdefaultsupdatemodel.BusinessDefaultsUpdateModel] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('defaults') }})
    email: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('email') }})
    fax: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fax') }})
    friendly_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('friendlyId') }})
    max_capacity: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxCapacity') }})
    max_group_size: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxGroupSize') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    phone: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('phone') }})
    region_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('regionId') }})
    settings: Optional[shared_onlinesettingsupdatemodel.OnlineSettingsUpdateModel] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('settings') }})
    timezone_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timezoneName') }})
    website: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('website') }})
    
