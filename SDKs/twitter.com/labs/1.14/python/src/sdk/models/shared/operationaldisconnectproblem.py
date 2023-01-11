import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class OperationalDisconnectProblemDisconnectTypeEnum(str, Enum):
    OPERATIONAL_DISCONNECT = "OperationalDisconnect"
    UPSTREAM_OPERATIONAL_DISCONNECT = "UpstreamOperationalDisconnect"
    FORCE_DISCONNECT = "ForceDisconnect"
    UPSTREAM_UNCLEAN_DISCONNECT = "UpstreamUncleanDisconnect"
    SLOW_READER = "SlowReader"
    INTERNAL_ERROR = "InternalError"
    PACKAGE_UPGRADED = "PackageUpgraded"
    PACKAGE_DOWNGRADED = "PackageDowngraded"
    CLIENT_APPLICATION_STATE_DEGRADED = "ClientApplicationStateDegraded"


@dataclass_json
@dataclasses.dataclass
class OperationalDisconnectProblem:
    r"""OperationalDisconnectProblem
    You have been disconnected for operational reasons.
    """
    
    detail: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('detail') }})
    title: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    type: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    disconnect_type: Optional[OperationalDisconnectProblemDisconnectTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('disconnect_type') }})
    
