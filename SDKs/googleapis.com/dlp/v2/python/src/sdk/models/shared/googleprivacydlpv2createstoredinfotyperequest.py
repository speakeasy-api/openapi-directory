import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googleprivacydlpv2storedinfotypeconfig as shared_googleprivacydlpv2storedinfotypeconfig


@dataclass_json
@dataclasses.dataclass
class GooglePrivacyDlpV2CreateStoredInfoTypeRequest:
    r"""GooglePrivacyDlpV2CreateStoredInfoTypeRequest
    Request message for CreateStoredInfoType.
    """
    
    config: Optional[shared_googleprivacydlpv2storedinfotypeconfig.GooglePrivacyDlpV2StoredInfoTypeConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('config') }})
    location_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('locationId') }})
    stored_info_type_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('storedInfoTypeId') }})
    
