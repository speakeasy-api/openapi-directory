import dataclasses
from typing import Optional
from ..shared import associationresults as shared_associationresults


@dataclasses.dataclass
class GetAssociationBySubjectAndObjectCategorySearchPathParams:
    object_category: str = dataclasses.field(metadata={'path_param': { 'field_name': 'object_category', 'style': 'simple', 'explode': False }})
    subject_category: str = dataclasses.field(metadata={'path_param': { 'field_name': 'subject_category', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetAssociationBySubjectAndObjectCategorySearchQueryParams:
    evidence: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'evidence', 'style': 'form', 'explode': True }})
    exclude_automatic_assertions: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'exclude_automatic_assertions', 'style': 'form', 'explode': True }})
    object: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'object', 'style': 'form', 'explode': True }})
    object_taxon: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'object_taxon', 'style': 'form', 'explode': True }})
    relation: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'relation', 'style': 'form', 'explode': True }})
    rows: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'rows', 'style': 'form', 'explode': True }})
    start: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'start', 'style': 'form', 'explode': True }})
    subject: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'subject', 'style': 'form', 'explode': True }})
    subject_taxon: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'subject_taxon', 'style': 'form', 'explode': True }})
    unselect_evidence: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'unselect_evidence', 'style': 'form', 'explode': True }})
    use_compact_associations: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'use_compact_associations', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetAssociationBySubjectAndObjectCategorySearchRequest:
    path_params: GetAssociationBySubjectAndObjectCategorySearchPathParams = dataclasses.field()
    query_params: GetAssociationBySubjectAndObjectCategorySearchQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetAssociationBySubjectAndObjectCategorySearchResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    association_results: Optional[list[shared_associationresults.AssociationResults]] = dataclasses.field(default=None)
    
