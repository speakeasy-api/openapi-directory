import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import metro as shared_metro


@dataclass_json
@dataclasses.dataclass
class MetrosListResponse:
    r"""MetrosListResponse
    Metro List Response
    """
    
    kind: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    metros: Optional[list[shared_metro.Metro]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metros') }})
    
