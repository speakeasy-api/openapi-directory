import dataclasses
from typing import Optional


@dataclasses.dataclass
class GetUntaggedImageCountPathParams:
    project_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'projectId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetUntaggedImageCountQueryParams:
    iteration_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'iterationId', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetUntaggedImageCountHeaders:
    training_key: str = dataclasses.field(metadata={'header': { 'field_name': 'Training-Key', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetUntaggedImageCountRequest:
    headers: GetUntaggedImageCountHeaders = dataclasses.field()
    path_params: GetUntaggedImageCountPathParams = dataclasses.field()
    query_params: GetUntaggedImageCountQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetUntaggedImageCountResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    get_untagged_image_count_200_application_json_int32_integer: Optional[int] = dataclasses.field(default=None)
    get_untagged_image_count_200_text_json_int32_integer: Optional[int] = dataclasses.field(default=None)
    
