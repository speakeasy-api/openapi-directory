import dataclasses
from typing import Optional
from ..shared import graph as shared_graph


@dataclasses.dataclass
class GetEvidenceGraphObjectPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetEvidenceGraphObjectRequest:
    path_params: GetEvidenceGraphObjectPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetEvidenceGraphObjectResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    graphs: Optional[list[shared_graph.Graph]] = dataclasses.field(default=None)
    
