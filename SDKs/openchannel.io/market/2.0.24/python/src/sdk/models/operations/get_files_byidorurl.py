import dataclasses
from typing import Optional


@dataclasses.dataclass
class GetFilesByIDOrURLQueryParams:
    file_id_or_url: str = dataclasses.field(metadata={'query_param': { 'field_name': 'fileIdOrUrl', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetFilesByIDOrURLRequest:
    query_params: GetFilesByIDOrURLQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetFilesByIDOrURLResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    
