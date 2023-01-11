import dataclasses
from typing import Optional
from ..shared import associationresults as shared_associationresults


@dataclasses.dataclass
class GetRelationUsagePivotLabelResourceQueryParams:
    evidence: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'evidence', 'style': 'form', 'explode': True }})
    subject_taxon: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'subject_taxon', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetRelationUsagePivotLabelResourceRequest:
    query_params: GetRelationUsagePivotLabelResourceQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetRelationUsagePivotLabelResourceResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    association_results: Optional[list[shared_associationresults.AssociationResults]] = dataclasses.field(default=None)
    
