import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import standard as shared_standard


@dataclass_json
@dataclasses.dataclass
class Strategy:
    r"""Strategy
    Strategy contains deployment strategy information.
    """
    
    standard: Optional[shared_standard.Standard] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('standard') }})
    
