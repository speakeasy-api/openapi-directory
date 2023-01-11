import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import pickupservicespickupservice as shared_pickupservicespickupservice


@dataclass_json
@dataclasses.dataclass
class ShippingsettingsGetSupportedPickupServicesResponse:
    kind: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    pickup_services: Optional[list[shared_pickupservicespickupservice.PickupServicesPickupService]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pickupServices') }})
    
