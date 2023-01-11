import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class ManagedZoneForwardingConfigNameServerTargetForwardingPathEnum(str, Enum):
    DEFAULT = "DEFAULT"
    PRIVATE = "PRIVATE"


@dataclass_json
@dataclasses.dataclass
class ManagedZoneForwardingConfigNameServerTarget:
    forwarding_path: Optional[ManagedZoneForwardingConfigNameServerTargetForwardingPathEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('forwardingPath') }})
    ipv4_address: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ipv4Address') }})
    ipv6_address: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ipv6Address') }})
    kind: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    
