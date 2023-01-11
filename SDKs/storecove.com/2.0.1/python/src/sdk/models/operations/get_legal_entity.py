import dataclasses
from typing import Optional
from ..shared import legalentity as shared_legalentity


@dataclasses.dataclass
class GetLegalEntityPathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetLegalEntityRequest:
    path_params: GetLegalEntityPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetLegalEntityResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    legal_entity: Optional[shared_legalentity.LegalEntity] = dataclasses.field(default=None)
    
