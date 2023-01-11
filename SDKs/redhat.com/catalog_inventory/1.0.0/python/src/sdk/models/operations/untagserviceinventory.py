import dataclasses
from ..shared import tag as shared_tag


@dataclasses.dataclass
class UntagServiceInventoryPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UntagServiceInventoryRequest:
    path_params: UntagServiceInventoryPathParams = dataclasses.field()
    request: list[shared_tag.Tag] = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class UntagServiceInventoryResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
