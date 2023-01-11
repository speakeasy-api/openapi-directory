import dataclasses
from typing import Optional
from ..shared import sufficiencyoutput as shared_sufficiencyoutput


@dataclasses.dataclass
class GetAnnotationScoreQueryParams:
    absent_id: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'absent_id', 'style': 'form', 'explode': True }})
    id: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'id', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetAnnotationScoreRequest:
    query_params: GetAnnotationScoreQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetAnnotationScoreResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    sufficiency_output: Optional[shared_sufficiencyoutput.SufficiencyOutput] = dataclasses.field(default=None)
    
