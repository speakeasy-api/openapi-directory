import dataclasses
from typing import Optional
from ..shared import associationresults as shared_associationresults


@dataclasses.dataclass
class GetRelationUsageBetweenResourcePathParams:
    object_category: str = dataclasses.field(metadata={'path_param': { 'field_name': 'object_category', 'style': 'simple', 'explode': False }})
    subject_category: str = dataclasses.field(metadata={'path_param': { 'field_name': 'subject_category', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetRelationUsageBetweenResourceQueryParams:
    evidence: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'evidence', 'style': 'form', 'explode': True }})
    subject_taxon: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'subject_taxon', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetRelationUsageBetweenResourceRequest:
    path_params: GetRelationUsageBetweenResourcePathParams = dataclasses.field()
    query_params: GetRelationUsageBetweenResourceQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetRelationUsageBetweenResourceResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    association_results: Optional[list[shared_associationresults.AssociationResults]] = dataclasses.field(default=None)
    
