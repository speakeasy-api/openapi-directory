import dataclasses
from typing import Optional
from ..shared import attribute as shared_attribute


@dataclasses.dataclass
class PostAttributesComputedRequest:
    request: shared_attribute.Attribute = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PostAttributesComputedResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    attribute: Optional[shared_attribute.Attribute] = dataclasses.field(default=None)
    
