import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class GoogleCloudChannelV1CloudIdentityCustomerAccount:
    r"""GoogleCloudChannelV1CloudIdentityCustomerAccount
    Entity representing a Cloud Identity account that may be associated with a Channel Services API partner.
    """
    
    customer_cloud_identity_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customerCloudIdentityId') }})
    customer_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customerName') }})
    existing: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('existing') }})
    owned: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('owned') }})
    
