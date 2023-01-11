import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import gkenodepoolconfig as shared_gkenodepoolconfig

class GkeNodePoolTargetRolesEnum(str, Enum):
    ROLE_UNSPECIFIED = "ROLE_UNSPECIFIED"
    DEFAULT = "DEFAULT"
    CONTROLLER = "CONTROLLER"
    SPARK_DRIVER = "SPARK_DRIVER"
    SPARK_EXECUTOR = "SPARK_EXECUTOR"


@dataclass_json
@dataclasses.dataclass
class GkeNodePoolTarget:
    r"""GkeNodePoolTarget
    GKE node pools that Dataproc workloads run on.
    """
    
    node_pool: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nodePool') }})
    node_pool_config: Optional[shared_gkenodepoolconfig.GkeNodePoolConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nodePoolConfig') }})
    roles: Optional[list[GkeNodePoolTargetRolesEnum]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('roles') }})
    
