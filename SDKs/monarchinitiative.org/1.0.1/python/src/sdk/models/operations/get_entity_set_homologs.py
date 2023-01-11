import dataclasses
from typing import Optional
from ..shared import associationresults as shared_associationresults


@dataclasses.dataclass
class GetEntitySetHomologsQueryParams:
    subject: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'subject', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetEntitySetHomologsRequest:
    query_params: GetEntitySetHomologsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetEntitySetHomologsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    association_results: Optional[list[shared_associationresults.AssociationResults]] = dataclasses.field(default=None)
    
