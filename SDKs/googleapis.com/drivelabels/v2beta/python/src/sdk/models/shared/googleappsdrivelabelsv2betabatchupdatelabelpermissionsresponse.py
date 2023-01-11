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
class GoogleAppsDriveLabelsV2betaBatchUpdateLabelPermissionsResponse:
    r"""GoogleAppsDriveLabelsV2betaBatchUpdateLabelPermissionsResponse
    Response for updating one or more Label Permissions.
    """
    
    permissions: Optional[list[shared_googleappsdrivelabelsv2betalabelpermission.GoogleAppsDriveLabelsV2betaLabelPermission]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('permissions') }})
    
