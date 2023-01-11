import dataclasses
from typing import Optional
from enum import Enum
from ..shared import customvisionerror as shared_customvisionerror
from ..shared import iteration as shared_iteration


@dataclasses.dataclass
class TrainProjectPathParams:
    project_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'projectId', 'style': 'simple', 'explode': False }})
    
class TrainProjectTrainingTypeEnum(str, Enum):
    REGULAR = "Regular"
    ADVANCED = "Advanced"


@dataclasses.dataclass
class TrainProjectQueryParams:
    force_train: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'forceTrain', 'style': 'form', 'explode': True }})
    notification_email_address: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'notificationEmailAddress', 'style': 'form', 'explode': True }})
    reserved_budget_in_hours: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'reservedBudgetInHours', 'style': 'form', 'explode': True }})
    training_type: Optional[TrainProjectTrainingTypeEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'trainingType', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class TrainProjectHeaders:
    training_key: str = dataclasses.field(metadata={'header': { 'field_name': 'Training-Key', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class TrainProjectRequest:
    headers: TrainProjectHeaders = dataclasses.field()
    path_params: TrainProjectPathParams = dataclasses.field()
    query_params: TrainProjectQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class TrainProjectResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    custom_vision_error: Optional[shared_customvisionerror.CustomVisionError] = dataclasses.field(default=None)
    iteration: Optional[shared_iteration.Iteration] = dataclasses.field(default=None)
    
