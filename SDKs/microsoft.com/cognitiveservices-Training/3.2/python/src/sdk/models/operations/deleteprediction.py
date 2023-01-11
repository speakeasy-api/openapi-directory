import dataclasses
from typing import Optional


@dataclasses.dataclass
class DeletePredictionPathParams:
    project_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'projectId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeletePredictionQueryParams:
    ids: list[str] = dataclasses.field(metadata={'query_param': { 'field_name': 'ids', 'style': 'form', 'explode': False }})
    

@dataclasses.dataclass
class DeletePredictionRequest:
    path_params: DeletePredictionPathParams = dataclasses.field()
    query_params: DeletePredictionQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class DeletePredictionResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    
