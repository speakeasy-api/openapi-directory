import dataclasses
from typing import Optional


@dataclasses.dataclass
class GetPathwaysWithDiagramsForCategoryUsingGetPathParams:
    category: str = dataclasses.field(metadata={'path_param': { 'field_name': 'category', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetPathwaysWithDiagramsForCategoryUsingGetRequest:
    path_params: GetPathwaysWithDiagramsForCategoryUsingGetPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetPathwaysWithDiagramsForCategoryUsingGetResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    
