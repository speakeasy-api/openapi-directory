import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googleappsdrivelabelsv2betalifecycledisabledpolicy as shared_googleappsdrivelabelsv2betalifecycledisabledpolicy
from ..shared import googleappsdrivelabelsv2betawritecontrol as shared_googleappsdrivelabelsv2betawritecontrol


@dataclass_json
@dataclasses.dataclass
class GoogleAppsDriveLabelsV2betaDisableLabelRequest:
    r"""GoogleAppsDriveLabelsV2betaDisableLabelRequest
    Request to deprecate a published Label.
    """
    
    disabled_policy: Optional[shared_googleappsdrivelabelsv2betalifecycledisabledpolicy.GoogleAppsDriveLabelsV2betaLifecycleDisabledPolicy] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('disabledPolicy') }})
    language_code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('languageCode') }})
    update_mask: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateMask') }})
    use_admin_access: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('useAdminAccess') }})
    write_control: Optional[shared_googleappsdrivelabelsv2betawritecontrol.GoogleAppsDriveLabelsV2betaWriteControl] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('writeControl') }})
    
