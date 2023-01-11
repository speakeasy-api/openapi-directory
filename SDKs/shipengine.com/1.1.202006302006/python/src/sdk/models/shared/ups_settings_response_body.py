import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import ups_invoice as shared_ups_invoice
from ..shared import ancillary_service_endorsement_enum as shared_ancillary_service_endorsement_enum
from ..shared import ups_pickup_type_enum as shared_ups_pickup_type_enum


@dataclass_json
@dataclasses.dataclass
class UpsSettingsResponseBody:
    r"""UpsSettingsResponseBody
    UPS account settings
    """
    
    account_postal_code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('account_postal_code') }})
    invoice: Optional[shared_ups_invoice.UpsInvoice] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('invoice') }})
    is_primary_account: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('is_primary_account') }})
    mail_innovations_cost_center: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mail_innovations_cost_center') }})
    mail_innovations_endorsement: Optional[shared_ancillary_service_endorsement_enum.AncillaryServiceEndorsementEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mail_innovations_endorsement') }})
    nickname: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nickname') }})
    pickup_type: Optional[shared_ups_pickup_type_enum.UpsPickupTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pickup_type') }})
    use_carbon_neutral_shipping_program: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('use_carbon_neutral_shipping_program') }})
    use_consolidation_services: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('use_consolidation_services') }})
    use_ground_freight_pricing: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('use_ground_freight_pricing') }})
    use_negotiated_rates: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('use_negotiated_rates') }})
    use_order_number_on_mail_innovations_labels: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('use_order_number_on_mail_innovations_labels') }})
    
