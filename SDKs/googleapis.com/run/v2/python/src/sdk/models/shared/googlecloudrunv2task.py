import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googlecloudrunv2condition as shared_googlecloudrunv2condition
from ..shared import googlecloudrunv2container as shared_googlecloudrunv2container
from ..shared import googlecloudrunv2taskattemptresult as shared_googlecloudrunv2taskattemptresult
from ..shared import googlecloudrunv2volume as shared_googlecloudrunv2volume
from ..shared import googlecloudrunv2vpcaccess as shared_googlecloudrunv2vpcaccess

class GoogleCloudRunV2TaskExecutionEnvironmentEnum(str, Enum):
    EXECUTION_ENVIRONMENT_UNSPECIFIED = "EXECUTION_ENVIRONMENT_UNSPECIFIED"
    EXECUTION_ENVIRONMENT_GEN1 = "EXECUTION_ENVIRONMENT_GEN1"
    EXECUTION_ENVIRONMENT_GEN2 = "EXECUTION_ENVIRONMENT_GEN2"


@dataclass_json
@dataclasses.dataclass
class GoogleCloudRunV2Task:
    r"""GoogleCloudRunV2Task
    Task represents a single run of a container to completion.
    """
    
    annotations: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('annotations') }})
    completion_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('completionTime') }})
    conditions: Optional[list[shared_googlecloudrunv2condition.GoogleCloudRunV2Condition]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('conditions') }})
    containers: Optional[list[shared_googlecloudrunv2container.GoogleCloudRunV2Container]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('containers') }})
    create_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createTime') }})
    delete_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deleteTime') }})
    encryption_key: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('encryptionKey') }})
    etag: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('etag') }})
    execution: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('execution') }})
    execution_environment: Optional[GoogleCloudRunV2TaskExecutionEnvironmentEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('executionEnvironment') }})
    expire_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('expireTime') }})
    generation: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('generation') }})
    index: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('index') }})
    job: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('job') }})
    labels: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    last_attempt_result: Optional[shared_googlecloudrunv2taskattemptresult.GoogleCloudRunV2TaskAttemptResult] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastAttemptResult') }})
    max_retries: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxRetries') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    observed_generation: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('observedGeneration') }})
    reconciling: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reconciling') }})
    retried: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('retried') }})
    service_account: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serviceAccount') }})
    start_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('startTime') }})
    timeout: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timeout') }})
    uid: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uid') }})
    update_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateTime') }})
    volumes: Optional[list[shared_googlecloudrunv2volume.GoogleCloudRunV2Volume]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('volumes') }})
    vpc_access: Optional[shared_googlecloudrunv2vpcaccess.GoogleCloudRunV2VpcAccess] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vpcAccess') }})
    
