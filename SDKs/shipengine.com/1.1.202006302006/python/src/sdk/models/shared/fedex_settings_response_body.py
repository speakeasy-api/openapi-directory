import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import fedex_pickup_type_enum as shared_fedex_pickup_type_enum
from ..shared import ancillary_service_endorsement_enum as shared_ancillary_service_endorsement_enum
from ..shared import smart_post_hub_enum as shared_smart_post_hub_enum


@dataclass_json
@dataclasses.dataclass
class FedexSettingsResponseBody:
    r"""FedexSettingsResponseBody
    A Fedex account settings request body
    """
    
    is_primary_account: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('is_primary_account') }})
    nickname: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nickname') }})
    pickup_type: Optional[shared_fedex_pickup_type_enum.FedexPickupTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pickup_type') }})
    smart_post_endorsement: Optional[shared_ancillary_service_endorsement_enum.AncillaryServiceEndorsementEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('smart_post_endorsement') }})
    smart_post_hub: Optional[shared_smart_post_hub_enum.SmartPostHubEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('smart_post_hub') }})
    
