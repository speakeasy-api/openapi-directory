import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googleappsdrivelabelsv2betalabelpermission as shared_googleappsdrivelabelsv2betalabelpermission


@dataclass_json
@dataclasses.dataclass
class GoogleAppsDriveLabelsV2betaUpdateLabelPermissionRequest:
    r"""GoogleAppsDriveLabelsV2betaUpdateLabelPermissionRequest
    Updates a Label Permission. Permissions affect the Label resource as a whole, are not revisioned, and do not require publishing.
    """
    
    label_permission: Optional[shared_googleappsdrivelabelsv2betalabelpermission.GoogleAppsDriveLabelsV2betaLabelPermission] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labelPermission') }})
    parent: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parent') }})
    use_admin_access: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('useAdminAccess') }})
    
