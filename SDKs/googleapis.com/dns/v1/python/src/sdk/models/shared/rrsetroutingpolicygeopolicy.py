import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import rrsetroutingpolicygeopolicygeopolicyitem as shared_rrsetroutingpolicygeopolicygeopolicyitem


@dataclass_json
@dataclasses.dataclass
class RrSetRoutingPolicyGeoPolicy:
    r"""RrSetRoutingPolicyGeoPolicy
    Configures a RRSetRoutingPolicy that routes based on the geo location of the querying user.
    """
    
    enable_fencing: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enableFencing') }})
    items: Optional[list[shared_rrsetroutingpolicygeopolicygeopolicyitem.RrSetRoutingPolicyGeoPolicyGeoPolicyItem]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('items') }})
    kind: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    
