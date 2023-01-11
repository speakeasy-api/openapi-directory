import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googledevtoolsremotebuildexecutionadminv1alphaautoscale as shared_googledevtoolsremotebuildexecutionadminv1alphaautoscale
from ..shared import googledevtoolsremotebuildexecutionadminv1alphaworkerconfig as shared_googledevtoolsremotebuildexecutionadminv1alphaworkerconfig

class GoogleDevtoolsRemotebuildexecutionAdminV1alphaWorkerPoolStateEnum(str, Enum):
    STATE_UNSPECIFIED = "STATE_UNSPECIFIED"
    CREATING = "CREATING"
    RUNNING = "RUNNING"
    UPDATING = "UPDATING"
    DELETING = "DELETING"
    INACTIVE = "INACTIVE"


@dataclass_json
@dataclasses.dataclass
class GoogleDevtoolsRemotebuildexecutionAdminV1alphaWorkerPool:
    r"""GoogleDevtoolsRemotebuildexecutionAdminV1alphaWorkerPool
    A worker pool resource in the Remote Build Execution API.
    """
    
    autoscale: Optional[shared_googledevtoolsremotebuildexecutionadminv1alphaautoscale.GoogleDevtoolsRemotebuildexecutionAdminV1alphaAutoscale] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('autoscale') }})
    channel: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('channel') }})
    host_os: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hostOs') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    state: Optional[GoogleDevtoolsRemotebuildexecutionAdminV1alphaWorkerPoolStateEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    worker_config: Optional[shared_googledevtoolsremotebuildexecutionadminv1alphaworkerconfig.GoogleDevtoolsRemotebuildexecutionAdminV1alphaWorkerConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('workerConfig') }})
    worker_count: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('workerCount') }})
    
