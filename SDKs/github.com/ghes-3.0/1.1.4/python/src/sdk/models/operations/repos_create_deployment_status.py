import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import deployment_status as shared_deployment_status
from ..shared import validation_error as shared_validation_error


@dataclasses.dataclass
class ReposCreateDeploymentStatusPathParams:
    deployment_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'deployment_id', 'style': 'simple', 'explode': False }})
    owner: str = dataclasses.field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = dataclasses.field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    
class ReposCreateDeploymentStatusRequestBodyEnvironmentEnum(str, Enum):
    PRODUCTION = "production"
    STAGING = "staging"
    QA = "qa"

class ReposCreateDeploymentStatusRequestBodyStateEnum(str, Enum):
    ERROR = "error"
    FAILURE = "failure"
    INACTIVE = "inactive"
    IN_PROGRESS = "in_progress"
    QUEUED = "queued"
    PENDING = "pending"
    SUCCESS = "success"


@dataclass_json
@dataclasses.dataclass
class ReposCreateDeploymentStatusRequestBody:
    state: ReposCreateDeploymentStatusRequestBodyStateEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    auto_inactive: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('auto_inactive') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    environment: Optional[ReposCreateDeploymentStatusRequestBodyEnvironmentEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('environment') }})
    environment_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('environment_url') }})
    log_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('log_url') }})
    target_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('target_url') }})
    

@dataclasses.dataclass
class ReposCreateDeploymentStatusRequest:
    path_params: ReposCreateDeploymentStatusPathParams = dataclasses.field()
    request: Optional[ReposCreateDeploymentStatusRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class ReposCreateDeploymentStatusResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    deployment_status: Optional[shared_deployment_status.DeploymentStatus] = dataclasses.field(default=None)
    validation_error: Optional[shared_validation_error.ValidationError] = dataclasses.field(default=None)
    
