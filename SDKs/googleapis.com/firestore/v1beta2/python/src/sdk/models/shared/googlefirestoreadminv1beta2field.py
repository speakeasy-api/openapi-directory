import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googlefirestoreadminv1beta2indexconfig as shared_googlefirestoreadminv1beta2indexconfig


@dataclass_json
@dataclasses.dataclass
class GoogleFirestoreAdminV1beta2Field:
    r"""GoogleFirestoreAdminV1beta2Field
    Represents a single field in the database. Fields are grouped by their \"Collection Group\", which represent all collections in the database with the same id.
    """
    
    index_config: Optional[shared_googlefirestoreadminv1beta2indexconfig.GoogleFirestoreAdminV1beta2IndexConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('indexConfig') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    
