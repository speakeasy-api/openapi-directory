import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import matter as shared_matter


@dataclass_json
@dataclasses.dataclass
class ReopenMatterResponse:
    r"""ReopenMatterResponse
    Response to a ReopenMatterRequest.
    """
    
    matter: Optional[shared_matter.Matter] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('matter') }})
    
