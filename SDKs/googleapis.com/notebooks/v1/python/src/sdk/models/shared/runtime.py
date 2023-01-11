import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import runtimeaccessconfig as shared_runtimeaccessconfig
from ..shared import runtimesoftwareconfig as shared_runtimesoftwareconfig
from ..shared import virtualmachine as shared_virtualmachine
from ..shared import runtimeaccessconfig as shared_runtimeaccessconfig
from ..shared import runtimemetrics as shared_runtimemetrics
from ..shared import runtimesoftwareconfig as shared_runtimesoftwareconfig
from ..shared import virtualmachine as shared_virtualmachine

class RuntimeHealthStateEnum(str, Enum):
    HEALTH_STATE_UNSPECIFIED = "HEALTH_STATE_UNSPECIFIED"
    HEALTHY = "HEALTHY"
    UNHEALTHY = "UNHEALTHY"
    AGENT_NOT_INSTALLED = "AGENT_NOT_INSTALLED"
    AGENT_NOT_RUNNING = "AGENT_NOT_RUNNING"

class RuntimeStateEnum(str, Enum):
    STATE_UNSPECIFIED = "STATE_UNSPECIFIED"
    STARTING = "STARTING"
    PROVISIONING = "PROVISIONING"
    ACTIVE = "ACTIVE"
    STOPPING = "STOPPING"
    STOPPED = "STOPPED"
    DELETING = "DELETING"
    UPGRADING = "UPGRADING"
    INITIALIZING = "INITIALIZING"


@dataclass_json
@dataclasses.dataclass
class RuntimeInput:
    r"""RuntimeInput
    The definition of a Runtime for a managed notebook instance.
    """
    
    access_config: Optional[shared_runtimeaccessconfig.RuntimeAccessConfigInput] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accessConfig') }})
    software_config: Optional[shared_runtimesoftwareconfig.RuntimeSoftwareConfigInput] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('softwareConfig') }})
    virtual_machine: Optional[shared_virtualmachine.VirtualMachineInput] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('virtualMachine') }})
    

@dataclass_json
@dataclasses.dataclass
class Runtime:
    r"""Runtime
    The definition of a Runtime for a managed notebook instance.
    """
    
    access_config: Optional[shared_runtimeaccessconfig.RuntimeAccessConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accessConfig') }})
    create_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createTime') }})
    health_state: Optional[RuntimeHealthStateEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('healthState') }})
    metrics: Optional[shared_runtimemetrics.RuntimeMetrics] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metrics') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    software_config: Optional[shared_runtimesoftwareconfig.RuntimeSoftwareConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('softwareConfig') }})
    state: Optional[RuntimeStateEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    update_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateTime') }})
    virtual_machine: Optional[shared_virtualmachine.VirtualMachine] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('virtualMachine') }})
    
