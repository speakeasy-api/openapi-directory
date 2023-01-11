import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googleappsdrivelabelsv2betalabelpermission as shared_googleappsdrivelabelsv2betalabelpermission


@dataclass_json
@dataclasses.dataclass
class GoogleAppsDriveLabelsV2betaListLabelPermissionsResponse:
    r"""GoogleAppsDriveLabelsV2betaListLabelPermissionsResponse
    Response for listing the permissions on a Label.
    """
    
    label_permissions: Optional[list[shared_googleappsdrivelabelsv2betalabelpermission.GoogleAppsDriveLabelsV2betaLabelPermission]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labelPermissions') }})
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
