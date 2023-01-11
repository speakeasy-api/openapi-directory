import dataclasses
from typing import Optional


@dataclasses.dataclass
class GetInformationContentResourcePathParams:
    object_category: str = dataclasses.field(metadata={'path_param': { 'field_name': 'object_category', 'style': 'simple', 'explode': False }})
    subject_category: str = dataclasses.field(metadata={'path_param': { 'field_name': 'subject_category', 'style': 'simple', 'explode': False }})
    subject_taxon: str = dataclasses.field(metadata={'path_param': { 'field_name': 'subject_taxon', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetInformationContentResourceQueryParams:
    evidence: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'evidence', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetInformationContentResourceRequest:
    path_params: GetInformationContentResourcePathParams = dataclasses.field()
    query_params: GetInformationContentResourceQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetInformationContentResourceResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
