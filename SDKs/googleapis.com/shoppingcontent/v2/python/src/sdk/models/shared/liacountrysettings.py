import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import liaaboutpagesettings as shared_liaaboutpagesettings
from ..shared import liainventorysettings as shared_liainventorysettings
from ..shared import liaondisplaytoordersettings as shared_liaondisplaytoordersettings
from ..shared import liaposdataprovider as shared_liaposdataprovider


@dataclass_json
@dataclasses.dataclass
class LiaCountrySettings:
    about: Optional[shared_liaaboutpagesettings.LiaAboutPageSettings] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('about') }})
    country: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('country') }})
    hosted_local_storefront_active: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hostedLocalStorefrontActive') }})
    inventory: Optional[shared_liainventorysettings.LiaInventorySettings] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inventory') }})
    on_display_to_order: Optional[shared_liaondisplaytoordersettings.LiaOnDisplayToOrderSettings] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('onDisplayToOrder') }})
    pos_data_provider: Optional[shared_liaposdataprovider.LiaPosDataProvider] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('posDataProvider') }})
    store_pickup_active: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('storePickupActive') }})
    
