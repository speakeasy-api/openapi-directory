import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googleappsdrivelabelsv2betaupdatelabelpermissionrequest as shared_googleappsdrivelabelsv2betaupdatelabelpermissionrequest


@dataclass_json
@dataclasses.dataclass
class GoogleAppsDriveLabelsV2betaBatchUpdateLabelPermissionsRequest:
    r"""GoogleAppsDriveLabelsV2betaBatchUpdateLabelPermissionsRequest
    Updates one or more Label Permissions.
    """
    
    requests: Optional[list[shared_googleappsdrivelabelsv2betaupdatelabelpermissionrequest.GoogleAppsDriveLabelsV2betaUpdateLabelPermissionRequest]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('requests') }})
    use_admin_access: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('useAdminAccess') }})
    
