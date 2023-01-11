import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import orderaddress as shared_orderaddress
from ..shared import orderpickupdetailscollector as shared_orderpickupdetailscollector


@dataclass_json
@dataclasses.dataclass
class OrderPickupDetails:
    address: Optional[shared_orderaddress.OrderAddress] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('address') }})
    collectors: Optional[list[shared_orderpickupdetailscollector.OrderPickupDetailsCollector]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('collectors') }})
    location_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('locationId') }})
    
