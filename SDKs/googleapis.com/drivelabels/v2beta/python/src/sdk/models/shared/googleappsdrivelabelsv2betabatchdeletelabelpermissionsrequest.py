import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googleappsdrivelabelsv2betadeletelabelpermissionrequest as shared_googleappsdrivelabelsv2betadeletelabelpermissionrequest


@dataclass_json
@dataclasses.dataclass
class GoogleAppsDriveLabelsV2betaBatchDeleteLabelPermissionsRequest:
    r"""GoogleAppsDriveLabelsV2betaBatchDeleteLabelPermissionsRequest
    Deletes one of more Label Permissions.
    """
    
    requests: Optional[list[shared_googleappsdrivelabelsv2betadeletelabelpermissionrequest.GoogleAppsDriveLabelsV2betaDeleteLabelPermissionRequest]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('requests') }})
    use_admin_access: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('useAdminAccess') }})
    
