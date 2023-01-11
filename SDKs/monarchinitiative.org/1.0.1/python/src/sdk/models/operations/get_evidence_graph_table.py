import dataclasses
from typing import Optional
from ..shared import associationresults as shared_associationresults


@dataclasses.dataclass
class GetEvidenceGraphTablePathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetEvidenceGraphTableQueryParams:
    is_publication: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'is_publication', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetEvidenceGraphTableRequest:
    path_params: GetEvidenceGraphTablePathParams = dataclasses.field()
    query_params: GetEvidenceGraphTableQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetEvidenceGraphTableResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    association_results: Optional[list[shared_associationresults.AssociationResults]] = dataclasses.field(default=None)
    
