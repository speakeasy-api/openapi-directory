import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googlefirestoreadminv1beta2index as shared_googlefirestoreadminv1beta2index


@dataclass_json
@dataclasses.dataclass
class GoogleFirestoreAdminV1beta2ListIndexesResponse:
    r"""GoogleFirestoreAdminV1beta2ListIndexesResponse
    The response for FirestoreAdmin.ListIndexes.
    """
    
    indexes: Optional[list[shared_googlefirestoreadminv1beta2index.GoogleFirestoreAdminV1beta2Index]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('indexes') }})
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
