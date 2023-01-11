import dataclasses
from typing import Optional


@dataclasses.dataclass
class GetAnnotationsByRgdIDAndOntologyUsingGetPathParams:
    ontology_prefix: str = dataclasses.field(metadata={'path_param': { 'field_name': 'ontologyPrefix', 'style': 'simple', 'explode': False }})
    rgd_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'rgdId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetAnnotationsByRgdIDAndOntologyUsingGetRequest:
    path_params: GetAnnotationsByRgdIDAndOntologyUsingGetPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetAnnotationsByRgdIDAndOntologyUsingGetResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    
