import dataclasses
from typing import Optional


@dataclasses.dataclass
class DeleteImageTagsPathParams:
    project_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'projectId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteImageTagsQueryParams:
    image_ids: list[str] = dataclasses.field(metadata={'query_param': { 'field_name': 'imageIds', 'style': 'form', 'explode': False }})
    tag_ids: list[str] = dataclasses.field(metadata={'query_param': { 'field_name': 'tagIds', 'style': 'form', 'explode': False }})
    

@dataclasses.dataclass
class DeleteImageTagsRequest:
    path_params: DeleteImageTagsPathParams = dataclasses.field()
    query_params: DeleteImageTagsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class DeleteImageTagsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    
