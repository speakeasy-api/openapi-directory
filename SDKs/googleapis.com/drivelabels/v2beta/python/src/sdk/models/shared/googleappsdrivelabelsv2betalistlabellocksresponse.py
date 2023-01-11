import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googleappsdrivelabelsv2betalabellock as shared_googleappsdrivelabelsv2betalabellock


@dataclass_json
@dataclasses.dataclass
class GoogleAppsDriveLabelsV2betaListLabelLocksResponse:
    r"""GoogleAppsDriveLabelsV2betaListLabelLocksResponse
    The response to a ListLabelLocksRequest.
    """
    
    label_locks: Optional[list[shared_googleappsdrivelabelsv2betalabellock.GoogleAppsDriveLabelsV2betaLabelLock]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labelLocks') }})
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
