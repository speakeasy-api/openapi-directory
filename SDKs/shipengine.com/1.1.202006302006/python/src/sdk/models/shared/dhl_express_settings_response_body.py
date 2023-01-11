import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class DhlExpressSettingsResponseBody:
    r"""DhlExpressSettingsResponseBody
    A DHL Express account settings
    """
    
    is_primary_account: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('is_primary_account') }})
    nickname: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nickname') }})
    should_hide_account_number_on_archive_doc: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('should_hide_account_number_on_archive_doc') }})
    
