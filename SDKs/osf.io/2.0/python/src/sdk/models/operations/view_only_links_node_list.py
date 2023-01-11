import dataclasses
from typing import Optional


@dataclasses.dataclass
class ViewOnlyLinksNodeListPathParams:
    link_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'link_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ViewOnlyLinksNodeListRequest:
    path_params: ViewOnlyLinksNodeListPathParams = dataclasses.field()
    

@dataclasses.dataclass
class ViewOnlyLinksNodeListResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    
