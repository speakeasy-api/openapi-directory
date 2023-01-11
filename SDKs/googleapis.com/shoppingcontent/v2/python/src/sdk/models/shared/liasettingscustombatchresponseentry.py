import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import errors as shared_errors
from ..shared import gmbaccounts as shared_gmbaccounts
from ..shared import liasettings as shared_liasettings
from ..shared import posdataproviders as shared_posdataproviders


@dataclass_json
@dataclasses.dataclass
class LiasettingsCustomBatchResponseEntry:
    batch_id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('batchId') }})
    errors: Optional[shared_errors.Errors] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    gmb_accounts: Optional[shared_gmbaccounts.GmbAccounts] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gmbAccounts') }})
    kind: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    lia_settings: Optional[shared_liasettings.LiaSettings] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('liaSettings') }})
    pos_data_providers: Optional[list[shared_posdataproviders.PosDataProviders]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('posDataProviders') }})
    
