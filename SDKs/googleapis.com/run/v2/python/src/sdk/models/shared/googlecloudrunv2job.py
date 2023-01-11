import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googlecloudrunv2binaryauthorization as shared_googlecloudrunv2binaryauthorization
from ..shared import googlecloudrunv2condition as shared_googlecloudrunv2condition
from ..shared import googlecloudrunv2executionreference as shared_googlecloudrunv2executionreference
from ..shared import googlecloudrunv2executiontemplate as shared_googlecloudrunv2executiontemplate

class GoogleCloudRunV2JobLaunchStageEnum(str, Enum):
    LAUNCH_STAGE_UNSPECIFIED = "LAUNCH_STAGE_UNSPECIFIED"
    UNIMPLEMENTED = "UNIMPLEMENTED"
    PRELAUNCH = "PRELAUNCH"
    EARLY_ACCESS = "EARLY_ACCESS"
    ALPHA = "ALPHA"
    BETA = "BETA"
    GA = "GA"
    DEPRECATED = "DEPRECATED"


@dataclass_json
@dataclasses.dataclass
class GoogleCloudRunV2Job:
    r"""GoogleCloudRunV2Job
    Job represents the configuration of a single job, which references a container image that is run to completion.
    """
    
    annotations: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('annotations') }})
    binary_authorization: Optional[shared_googlecloudrunv2binaryauthorization.GoogleCloudRunV2BinaryAuthorization] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('binaryAuthorization') }})
    client: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('client') }})
    client_version: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clientVersion') }})
    conditions: Optional[list[shared_googlecloudrunv2condition.GoogleCloudRunV2Condition]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('conditions') }})
    create_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createTime') }})
    creator: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('creator') }})
    delete_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deleteTime') }})
    etag: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('etag') }})
    execution_count: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('executionCount') }})
    expire_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('expireTime') }})
    generation: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('generation') }})
    labels: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    last_modifier: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastModifier') }})
    latest_created_execution: Optional[shared_googlecloudrunv2executionreference.GoogleCloudRunV2ExecutionReference] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('latestCreatedExecution') }})
    launch_stage: Optional[GoogleCloudRunV2JobLaunchStageEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('launchStage') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    observed_generation: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('observedGeneration') }})
    reconciling: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reconciling') }})
    template: Optional[shared_googlecloudrunv2executiontemplate.GoogleCloudRunV2ExecutionTemplate] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('template') }})
    terminal_condition: Optional[shared_googlecloudrunv2condition.GoogleCloudRunV2Condition] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('terminalCondition') }})
    uid: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uid') }})
    update_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateTime') }})
    

@dataclass_json
@dataclasses.dataclass
class GoogleCloudRunV2JobInput:
    r"""GoogleCloudRunV2JobInput
    Job represents the configuration of a single job, which references a container image that is run to completion.
    """
    
    annotations: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('annotations') }})
    binary_authorization: Optional[shared_googlecloudrunv2binaryauthorization.GoogleCloudRunV2BinaryAuthorization] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('binaryAuthorization') }})
    client: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('client') }})
    client_version: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clientVersion') }})
    labels: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    latest_created_execution: Optional[shared_googlecloudrunv2executionreference.GoogleCloudRunV2ExecutionReference] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('latestCreatedExecution') }})
    launch_stage: Optional[GoogleCloudRunV2JobLaunchStageEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('launchStage') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    template: Optional[shared_googlecloudrunv2executiontemplate.GoogleCloudRunV2ExecutionTemplate] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('template') }})
    terminal_condition: Optional[shared_googlecloudrunv2condition.GoogleCloudRunV2Condition] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('terminalCondition') }})
    
