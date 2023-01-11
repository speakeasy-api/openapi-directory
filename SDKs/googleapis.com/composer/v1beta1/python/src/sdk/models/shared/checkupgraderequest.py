import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class CheckUpgradeRequest:
    r"""CheckUpgradeRequest
    Request to check whether image upgrade will succeed.
    """
    
    image_version: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('imageVersion') }})
    
