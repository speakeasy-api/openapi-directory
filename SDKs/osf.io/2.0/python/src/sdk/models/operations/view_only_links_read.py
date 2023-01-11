import dataclasses
from typing import Optional


@dataclasses.dataclass
class ViewOnlyLinksReadPathParams:
    link_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'link_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ViewOnlyLinksReadRequest:
    path_params: ViewOnlyLinksReadPathParams = dataclasses.field()
    

@dataclasses.dataclass
class ViewOnlyLinksReadResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    
