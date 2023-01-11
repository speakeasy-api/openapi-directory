import dataclasses
from typing import Any,Optional
from ..shared import legalentity as shared_legalentity


@dataclasses.dataclass
class CreateLegalEntityRequest:
    request: Any = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class CreateLegalEntityResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error_models: Optional[list[Any]] = dataclasses.field(default=None)
    legal_entity: Optional[shared_legalentity.LegalEntity] = dataclasses.field(default=None)
    
