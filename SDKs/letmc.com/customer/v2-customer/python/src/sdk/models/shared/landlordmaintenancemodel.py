import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import landlordmaintenancejobmodel as shared_landlordmaintenancejobmodel


@dataclass_json
@dataclasses.dataclass
class LandlordMaintenanceModel:
    r"""LandlordMaintenanceModel
    Landlord Maintenance
    """
    
    jobs: Optional[list[shared_landlordmaintenancejobmodel.LandlordMaintenanceJobModel]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Jobs') }})
    
