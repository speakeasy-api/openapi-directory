import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import defaultpool as shared_defaultpool
from ..shared import privatepool as shared_privatepool

class ExecutionConfigUsagesEnum(str, Enum):
    EXECUTION_ENVIRONMENT_USAGE_UNSPECIFIED = "EXECUTION_ENVIRONMENT_USAGE_UNSPECIFIED"
    RENDER = "RENDER"
    DEPLOY = "DEPLOY"
    VERIFY = "VERIFY"


@dataclass_json
@dataclasses.dataclass
class ExecutionConfig:
    r"""ExecutionConfig
    Configuration of the environment to use when calling Skaffold.
    """
    
    artifact_storage: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('artifactStorage') }})
    default_pool: Optional[shared_defaultpool.DefaultPool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('defaultPool') }})
    execution_timeout: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('executionTimeout') }})
    private_pool: Optional[shared_privatepool.PrivatePool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('privatePool') }})
    service_account: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serviceAccount') }})
    usages: Optional[list[ExecutionConfigUsagesEnum]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('usages') }})
    worker_pool: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('workerPool') }})
    
