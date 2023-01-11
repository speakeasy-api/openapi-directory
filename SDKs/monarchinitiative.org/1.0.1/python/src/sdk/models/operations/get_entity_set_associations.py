import dataclasses
from typing import Optional
from ..shared import associationresults as shared_associationresults


@dataclasses.dataclass
class GetEntitySetAssociationsQueryParams:
    background: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'background', 'style': 'form', 'explode': True }})
    object_category: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'object_category', 'style': 'form', 'explode': True }})
    object_slim: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'object_slim', 'style': 'form', 'explode': True }})
    subject: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'subject', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetEntitySetAssociationsRequest:
    query_params: GetEntitySetAssociationsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetEntitySetAssociationsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    association_results: Optional[list[shared_associationresults.AssociationResults]] = dataclasses.field(default=None)
    
