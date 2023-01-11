import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class AddTargetedSitesRequestTargetingModeEnum(str, Enum):
    TARGETING_MODE_UNSPECIFIED = "TARGETING_MODE_UNSPECIFIED"
    INCLUSIVE = "INCLUSIVE"
    EXCLUSIVE = "EXCLUSIVE"


@dataclass_json
@dataclasses.dataclass
class AddTargetedSitesRequest:
    r"""AddTargetedSitesRequest
    A request to start targeting the provided sites in a specific pretargeting configuration. The pretargeting configuration itself specifies how these sites are targeted in PretargetingConfig.webTargeting.
    """
    
    sites: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sites') }})
    targeting_mode: Optional[AddTargetedSitesRequestTargetingModeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('targetingMode') }})
    
