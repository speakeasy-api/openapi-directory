import dataclasses
from typing import Optional


@dataclasses.dataclass
class WikiReadPathParams:
    wiki_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'wiki_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class WikiReadRequest:
    path_params: WikiReadPathParams = dataclasses.field()
    

@dataclasses.dataclass
class WikiReadResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    
