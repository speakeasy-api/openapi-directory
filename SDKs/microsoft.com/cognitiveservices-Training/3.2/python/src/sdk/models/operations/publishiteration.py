import dataclasses
from typing import Optional
from ..shared import customvisionerror as shared_customvisionerror


@dataclasses.dataclass
class PublishIterationPathParams:
    iteration_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'iterationId', 'style': 'simple', 'explode': False }})
    project_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'projectId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PublishIterationQueryParams:
    prediction_id: str = dataclasses.field(metadata={'query_param': { 'field_name': 'predictionId', 'style': 'form', 'explode': True }})
    publish_name: str = dataclasses.field(metadata={'query_param': { 'field_name': 'publishName', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class PublishIterationRequest:
    path_params: PublishIterationPathParams = dataclasses.field()
    query_params: PublishIterationQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class PublishIterationResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    custom_vision_error: Optional[shared_customvisionerror.CustomVisionError] = dataclasses.field(default=None)
    publish_iteration_200_application_json_boolean: Optional[bool] = dataclasses.field(default=None)
    
