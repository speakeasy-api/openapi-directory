import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googlecloudrunv2container as shared_googlecloudrunv2container
from ..shared import googlecloudrunv2volume as shared_googlecloudrunv2volume
from ..shared import googlecloudrunv2vpcaccess as shared_googlecloudrunv2vpcaccess

class GoogleCloudRunV2TaskTemplateExecutionEnvironmentEnum(str, Enum):
    EXECUTION_ENVIRONMENT_UNSPECIFIED = "EXECUTION_ENVIRONMENT_UNSPECIFIED"
    EXECUTION_ENVIRONMENT_GEN1 = "EXECUTION_ENVIRONMENT_GEN1"
    EXECUTION_ENVIRONMENT_GEN2 = "EXECUTION_ENVIRONMENT_GEN2"


@dataclass_json
@dataclasses.dataclass
class GoogleCloudRunV2TaskTemplate:
    r"""GoogleCloudRunV2TaskTemplate
    TaskTemplate describes the data a task should have when created from a template.
    """
    
    containers: Optional[list[shared_googlecloudrunv2container.GoogleCloudRunV2Container]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('containers') }})
    encryption_key: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('encryptionKey') }})
    execution_environment: Optional[GoogleCloudRunV2TaskTemplateExecutionEnvironmentEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('executionEnvironment') }})
    max_retries: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxRetries') }})
    service_account: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serviceAccount') }})
    timeout: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timeout') }})
    volumes: Optional[list[shared_googlecloudrunv2volume.GoogleCloudRunV2Volume]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('volumes') }})
    vpc_access: Optional[shared_googlecloudrunv2vpcaccess.GoogleCloudRunV2VpcAccess] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vpcAccess') }})
    
