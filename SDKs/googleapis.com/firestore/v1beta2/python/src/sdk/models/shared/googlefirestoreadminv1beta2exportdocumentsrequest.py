import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class GoogleFirestoreAdminV1beta2ExportDocumentsRequest:
    r"""GoogleFirestoreAdminV1beta2ExportDocumentsRequest
    The request for FirestoreAdmin.ExportDocuments.
    """
    
    collection_ids: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('collectionIds') }})
    output_uri_prefix: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('outputUriPrefix') }})
    
