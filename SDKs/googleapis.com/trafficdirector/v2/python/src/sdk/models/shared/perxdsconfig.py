import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import clustersconfigdump as shared_clustersconfigdump
from ..shared import listenersconfigdump as shared_listenersconfigdump
from ..shared import routesconfigdump as shared_routesconfigdump
from ..shared import scopedroutesconfigdump as shared_scopedroutesconfigdump

class PerXdsConfigStatusEnum(str, Enum):
    UNKNOWN = "UNKNOWN"
    SYNCED = "SYNCED"
    NOT_SENT = "NOT_SENT"
    STALE = "STALE"
    ERROR = "ERROR"


@dataclass_json
@dataclasses.dataclass
class PerXdsConfig:
    r"""PerXdsConfig
    Detailed config (per xDS) with status. [#next-free-field: 6]
    """
    
    cluster_config: Optional[shared_clustersconfigdump.ClustersConfigDump] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clusterConfig') }})
    listener_config: Optional[shared_listenersconfigdump.ListenersConfigDump] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('listenerConfig') }})
    route_config: Optional[shared_routesconfigdump.RoutesConfigDump] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('routeConfig') }})
    scoped_route_config: Optional[shared_scopedroutesconfigdump.ScopedRoutesConfigDump] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('scopedRouteConfig') }})
    status: Optional[PerXdsConfigStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    
