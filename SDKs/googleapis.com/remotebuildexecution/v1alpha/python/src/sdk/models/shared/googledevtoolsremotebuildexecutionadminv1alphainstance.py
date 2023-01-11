import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googledevtoolsremotebuildexecutionadminv1alphafeaturepolicy as shared_googledevtoolsremotebuildexecutionadminv1alphafeaturepolicy

class GoogleDevtoolsRemotebuildexecutionAdminV1alphaInstanceStateEnum(str, Enum):
    STATE_UNSPECIFIED = "STATE_UNSPECIFIED"
    CREATING = "CREATING"
    RUNNING = "RUNNING"
    INACTIVE = "INACTIVE"


@dataclass_json
@dataclasses.dataclass
class GoogleDevtoolsRemotebuildexecutionAdminV1alphaInstance:
    r"""GoogleDevtoolsRemotebuildexecutionAdminV1alphaInstance
    Instance conceptually encapsulates all Remote Build Execution resources for remote builds. An instance consists of storage and compute resources (for example, `ContentAddressableStorage`, `ActionCache`, `WorkerPools`) used for running remote builds. All Remote Build Execution API calls are scoped to an instance.
    """
    
    feature_policy: Optional[shared_googledevtoolsremotebuildexecutionadminv1alphafeaturepolicy.GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicy] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('featurePolicy') }})
    location: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('location') }})
    logging_enabled: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('loggingEnabled') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    state: Optional[GoogleDevtoolsRemotebuildexecutionAdminV1alphaInstanceStateEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    
