import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class BrowserTargetingOptionDetails:
    r"""BrowserTargetingOptionDetails
    Represents a targetable browser. This will be populated in the browser_details field when targeting_type is `TARGETING_TYPE_BROWSER`.
    """
    
    display_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    
