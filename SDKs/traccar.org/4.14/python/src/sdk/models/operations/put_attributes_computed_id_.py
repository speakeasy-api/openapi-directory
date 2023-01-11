import dataclasses
from typing import Optional
from ..shared import attribute as shared_attribute


@dataclasses.dataclass
class PutAttributesComputedIDPathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PutAttributesComputedIDRequest:
    path_params: PutAttributesComputedIDPathParams = dataclasses.field()
    request: shared_attribute.Attribute = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PutAttributesComputedIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    attribute: Optional[shared_attribute.Attribute] = dataclasses.field(default=None)
    
