import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class NodeGroupAffinity:
    r"""NodeGroupAffinity
    Node Group Affinity for clusters using sole-tenant node groups.
    """
    
    node_group_uri: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nodeGroupUri') }})
    
