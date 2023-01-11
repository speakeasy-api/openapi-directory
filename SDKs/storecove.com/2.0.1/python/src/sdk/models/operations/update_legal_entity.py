import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from ..shared import legalentity as shared_legalentity


@dataclasses.dataclass
class UpdateLegalEntityPathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UpdateLegalEntityRequest:
    path_params: UpdateLegalEntityPathParams = dataclasses.field()
    request: Any = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class UpdateLegalEntityResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error_models: Optional[list[Any]] = dataclasses.field(default=None)
    legal_entity: Optional[shared_legalentity.LegalEntity] = dataclasses.field(default=None)
    
