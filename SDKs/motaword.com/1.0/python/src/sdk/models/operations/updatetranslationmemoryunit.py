import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import translationmemoryunit as shared_translationmemoryunit


@dataclasses.dataclass
class UpdateTranslationMemoryUnitRequest:
    request: Optional[shared_translationmemoryunit.TranslationMemoryUnit] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class UpdateTranslationMemoryUnitResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
