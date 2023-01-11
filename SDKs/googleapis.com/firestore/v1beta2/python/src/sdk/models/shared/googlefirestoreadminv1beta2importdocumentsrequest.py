import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class GoogleFirestoreAdminV1beta2ImportDocumentsRequest:
    r"""GoogleFirestoreAdminV1beta2ImportDocumentsRequest
    The request for FirestoreAdmin.ImportDocuments.
    """
    
    collection_ids: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('collectionIds') }})
    input_uri_prefix: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inputUriPrefix') }})
    
