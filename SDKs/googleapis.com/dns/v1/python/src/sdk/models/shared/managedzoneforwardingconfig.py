import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import managedzoneforwardingconfignameservertarget as shared_managedzoneforwardingconfignameservertarget


@dataclass_json
@dataclasses.dataclass
class ManagedZoneForwardingConfig:
    kind: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    target_name_servers: Optional[list[shared_managedzoneforwardingconfignameservertarget.ManagedZoneForwardingConfigNameServerTarget]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('targetNameServers') }})
    
