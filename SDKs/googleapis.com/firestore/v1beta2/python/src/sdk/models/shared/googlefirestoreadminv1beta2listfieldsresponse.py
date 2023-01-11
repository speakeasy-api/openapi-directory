import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googlefirestoreadminv1beta2field as shared_googlefirestoreadminv1beta2field


@dataclass_json
@dataclasses.dataclass
class GoogleFirestoreAdminV1beta2ListFieldsResponse:
    r"""GoogleFirestoreAdminV1beta2ListFieldsResponse
    The response for FirestoreAdmin.ListFields.
    """
    
    fields: Optional[list[shared_googlefirestoreadminv1beta2field.GoogleFirestoreAdminV1beta2Field]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fields') }})
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
