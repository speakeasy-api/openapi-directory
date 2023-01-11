import dataclasses
from typing import Optional


@dataclasses.dataclass
class GetPairSimJaccardResourcePathParams:
    id1: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id1', 'style': 'simple', 'explode': False }})
    id2: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id2', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetPairSimJaccardResourceQueryParams:
    object_category: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'object_category', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetPairSimJaccardResourceRequest:
    path_params: GetPairSimJaccardResourcePathParams = dataclasses.field()
    query_params: GetPairSimJaccardResourceQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetPairSimJaccardResourceResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
