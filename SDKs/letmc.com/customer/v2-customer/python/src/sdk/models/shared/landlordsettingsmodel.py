import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import landlorddetailsmodel as shared_landlorddetailsmodel


@dataclass_json
@dataclasses.dataclass
class LandlordSettingsModel:
    r"""LandlordSettingsModel
    Landlord Settings
    """
    
    linked_accounts: Optional[list[shared_landlorddetailsmodel.LandlordDetailsModel]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LinkedAccounts') }})
    
