import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googlefirestoreadminv1beta2index as shared_googlefirestoreadminv1beta2index


@dataclass_json
@dataclasses.dataclass
class GoogleFirestoreAdminV1beta2IndexConfig:
    r"""GoogleFirestoreAdminV1beta2IndexConfig
    The index configuration for this field.
    """
    
    ancestor_field: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ancestorField') }})
    indexes: Optional[list[shared_googlefirestoreadminv1beta2index.GoogleFirestoreAdminV1beta2Index]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('indexes') }})
    reverting: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reverting') }})
    uses_ancestor_config: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('usesAncestorConfig') }})
    
