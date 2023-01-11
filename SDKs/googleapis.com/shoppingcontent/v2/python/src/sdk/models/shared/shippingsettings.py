import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import postalcodegroup as shared_postalcodegroup
from ..shared import service as shared_service
from ..shared import warehouse as shared_warehouse


@dataclass_json
@dataclasses.dataclass
class ShippingSettings:
    r"""ShippingSettings
    The merchant account's shipping settings. All methods except getsupportedcarriers and getsupportedholidays require the admin role.
    """
    
    account_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accountId') }})
    postal_code_groups: Optional[list[shared_postalcodegroup.PostalCodeGroup]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('postalCodeGroups') }})
    services: Optional[list[shared_service.Service]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('services') }})
    warehouses: Optional[list[shared_warehouse.Warehouse]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('warehouses') }})
    
