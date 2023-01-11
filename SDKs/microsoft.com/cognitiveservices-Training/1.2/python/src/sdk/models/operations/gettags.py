import dataclasses
from typing import Optional
from ..shared import taglist as shared_taglist


@dataclasses.dataclass
class GetTagsPathParams:
    project_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'projectId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetTagsQueryParams:
    iteration_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'iterationId', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetTagsHeaders:
    training_key: str = dataclasses.field(metadata={'header': { 'field_name': 'Training-Key', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetTagsRequest:
    headers: GetTagsHeaders = dataclasses.field()
    path_params: GetTagsPathParams = dataclasses.field()
    query_params: GetTagsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetTagsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    tag_list: Optional[shared_taglist.TagList] = dataclasses.field(default=None)
    
