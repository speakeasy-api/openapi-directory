import dataclasses
from typing import Optional
from ..shared import customvisionerror as shared_customvisionerror


@dataclasses.dataclass
class GetImagePerformanceCountPathParams:
    iteration_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'iterationId', 'style': 'simple', 'explode': False }})
    project_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'projectId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetImagePerformanceCountQueryParams:
    tag_ids: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'tagIds', 'style': 'form', 'explode': False }})
    

@dataclasses.dataclass
class GetImagePerformanceCountRequest:
    path_params: GetImagePerformanceCountPathParams = dataclasses.field()
    query_params: GetImagePerformanceCountQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetImagePerformanceCountResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    custom_vision_error: Optional[shared_customvisionerror.CustomVisionError] = dataclasses.field(default=None)
    get_image_performance_count_200_application_json_int32_integer: Optional[int] = dataclasses.field(default=None)
    
