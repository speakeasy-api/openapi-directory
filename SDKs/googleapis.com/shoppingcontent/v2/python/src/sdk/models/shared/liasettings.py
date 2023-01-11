import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import liacountrysettings as shared_liacountrysettings


@dataclass_json
@dataclasses.dataclass
class LiaSettings:
    r"""LiaSettings
    Local Inventory ads (LIA) settings. All methods except listposdataproviders require the admin role.
    """
    
    account_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accountId') }})
    country_settings: Optional[list[shared_liacountrysettings.LiaCountrySettings]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('countrySettings') }})
    kind: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    
