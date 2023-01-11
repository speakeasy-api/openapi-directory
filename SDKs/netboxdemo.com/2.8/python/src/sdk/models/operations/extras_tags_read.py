import dataclasses
from typing import Optional
from ..shared import tag as shared_tag


@dataclasses.dataclass
class ExtrasTagsReadPathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ExtrasTagsReadRequest:
    path_params: ExtrasTagsReadPathParams = dataclasses.field()
    

@dataclasses.dataclass
class ExtrasTagsReadResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    tag: Optional[shared_tag.Tag] = dataclasses.field(default=None)
    
