import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googlefirestoreadminv1beta2indexfield as shared_googlefirestoreadminv1beta2indexfield

class GoogleFirestoreAdminV1beta2IndexQueryScopeEnum(str, Enum):
    QUERY_SCOPE_UNSPECIFIED = "QUERY_SCOPE_UNSPECIFIED"
    COLLECTION = "COLLECTION"
    COLLECTION_GROUP = "COLLECTION_GROUP"

class GoogleFirestoreAdminV1beta2IndexStateEnum(str, Enum):
    STATE_UNSPECIFIED = "STATE_UNSPECIFIED"
    CREATING = "CREATING"
    READY = "READY"
    NEEDS_REPAIR = "NEEDS_REPAIR"


@dataclass_json
@dataclasses.dataclass
class GoogleFirestoreAdminV1beta2Index:
    r"""GoogleFirestoreAdminV1beta2Index
    Cloud Firestore indexes enable simple and complex queries against documents in a database.
    """
    
    fields: Optional[list[shared_googlefirestoreadminv1beta2indexfield.GoogleFirestoreAdminV1beta2IndexField]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fields') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    query_scope: Optional[GoogleFirestoreAdminV1beta2IndexQueryScopeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('queryScope') }})
    state: Optional[GoogleFirestoreAdminV1beta2IndexStateEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    
