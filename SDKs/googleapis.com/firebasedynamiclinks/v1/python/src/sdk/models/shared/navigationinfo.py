import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class NavigationInfo:
    r"""NavigationInfo
    Information of navigation behavior.
    """
    
    enable_forced_redirect: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enableForcedRedirect') }})
    
