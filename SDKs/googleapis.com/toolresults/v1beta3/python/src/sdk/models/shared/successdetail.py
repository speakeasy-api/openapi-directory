import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class SuccessDetail:
    r"""SuccessDetail
    Details for an outcome with a SUCCESS outcome summary. LINT.IfChange
    """
    
    other_native_crash: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('otherNativeCrash') }})
    
