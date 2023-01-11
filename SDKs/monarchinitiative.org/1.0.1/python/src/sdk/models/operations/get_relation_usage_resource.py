import dataclasses
from typing import Optional
from ..shared import associationresults as shared_associationresults


@dataclasses.dataclass
class GetRelationUsageResourceQueryParams:
    evidence: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'evidence', 'style': 'form', 'explode': True }})
    subject_taxon: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'subject_taxon', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetRelationUsageResourceRequest:
    query_params: GetRelationUsageResourceQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetRelationUsageResourceResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    association_results: Optional[list[shared_associationresults.AssociationResults]] = dataclasses.field(default=None)
    
