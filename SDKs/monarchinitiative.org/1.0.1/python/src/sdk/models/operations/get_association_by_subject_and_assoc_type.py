import dataclasses
from typing import Optional
from ..shared import associationresults as shared_associationresults


@dataclasses.dataclass
class GetAssociationBySubjectAndAssocTypePathParams:
    association_type: str = dataclasses.field(metadata={'path_param': { 'field_name': 'association_type', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetAssociationBySubjectAndAssocTypeQueryParams:
    evidence: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'evidence', 'style': 'form', 'explode': True }})
    exclude_automatic_assertions: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'exclude_automatic_assertions', 'style': 'form', 'explode': True }})
    object: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'object', 'style': 'form', 'explode': True }})
    rows: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'rows', 'style': 'form', 'explode': True }})
    start: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'start', 'style': 'form', 'explode': True }})
    subject: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'subject', 'style': 'form', 'explode': True }})
    unselect_evidence: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'unselect_evidence', 'style': 'form', 'explode': True }})
    use_compact_associations: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'use_compact_associations', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetAssociationBySubjectAndAssocTypeRequest:
    path_params: GetAssociationBySubjectAndAssocTypePathParams = dataclasses.field()
    query_params: GetAssociationBySubjectAndAssocTypeQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetAssociationBySubjectAndAssocTypeResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    association_results: Optional[list[shared_associationresults.AssociationResults]] = dataclasses.field(default=None)
    
