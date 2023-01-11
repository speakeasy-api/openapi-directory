import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import guardian as shared_guardian


@dataclass_json
@dataclasses.dataclass
class ListGuardiansResponse:
    r"""ListGuardiansResponse
    Response when listing guardians.
    """
    
    guardians: Optional[list[shared_guardian.Guardian]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('guardians') }})
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
