import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googleprivacydlpv2storedinfotype as shared_googleprivacydlpv2storedinfotype


@dataclass_json
@dataclasses.dataclass
class GooglePrivacyDlpV2ListStoredInfoTypesResponse:
    r"""GooglePrivacyDlpV2ListStoredInfoTypesResponse
    Response message for ListStoredInfoTypes.
    """
    
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    stored_info_types: Optional[list[shared_googleprivacydlpv2storedinfotype.GooglePrivacyDlpV2StoredInfoType]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('storedInfoTypes') }})
    
