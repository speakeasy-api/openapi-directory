import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googleappsdrivelabelsv2betadeltaupdatelabelrequestrequest as shared_googleappsdrivelabelsv2betadeltaupdatelabelrequestrequest
from ..shared import googleappsdrivelabelsv2betawritecontrol as shared_googleappsdrivelabelsv2betawritecontrol

class GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestViewEnum(str, Enum):
    LABEL_VIEW_BASIC = "LABEL_VIEW_BASIC"
    LABEL_VIEW_FULL = "LABEL_VIEW_FULL"


@dataclass_json
@dataclasses.dataclass
class GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestInput:
    r"""GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestInput
    The set of requests for updating aspects of a Label. If any request is not valid, no requests will be applied.
    """
    
    language_code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('languageCode') }})
    requests: Optional[list[shared_googleappsdrivelabelsv2betadeltaupdatelabelrequestrequest.GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestRequestInput]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('requests') }})
    use_admin_access: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('useAdminAccess') }})
    view: Optional[GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestViewEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('view') }})
    write_control: Optional[shared_googleappsdrivelabelsv2betawritecontrol.GoogleAppsDriveLabelsV2betaWriteControl] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('writeControl') }})
    
