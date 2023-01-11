import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googleappsdrivelabelsv2betawritecontrol as shared_googleappsdrivelabelsv2betawritecontrol


@dataclass_json
@dataclasses.dataclass
class GoogleAppsDriveLabelsV2betaPublishLabelRequest:
    r"""GoogleAppsDriveLabelsV2betaPublishLabelRequest
    Request to publish a label.
    """
    
    language_code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('languageCode') }})
    use_admin_access: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('useAdminAccess') }})
    write_control: Optional[shared_googleappsdrivelabelsv2betawritecontrol.GoogleAppsDriveLabelsV2betaWriteControl] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('writeControl') }})
    
