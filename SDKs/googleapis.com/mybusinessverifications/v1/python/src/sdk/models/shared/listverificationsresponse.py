import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import verification as shared_verification


@dataclass_json
@dataclasses.dataclass
class ListVerificationsResponse:
    r"""ListVerificationsResponse
    Response message for Verifications.ListVerifications.
    """
    
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    verifications: Optional[list[shared_verification.Verification]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('verifications') }})
    
