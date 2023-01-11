import dataclasses
from typing import Optional
from ..shared import associationresults as shared_associationresults


@dataclasses.dataclass
class GetAssociationObjectPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetAssociationObjectRequest:
    path_params: GetAssociationObjectPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetAssociationObjectResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    association_results: Optional[list[shared_associationresults.AssociationResults]] = dataclasses.field(default=None)
    
