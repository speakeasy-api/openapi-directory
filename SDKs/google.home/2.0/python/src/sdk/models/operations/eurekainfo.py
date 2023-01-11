import dataclasses
from typing import Optional
from ..shared import example1 as shared_example1


@dataclasses.dataclass
class EurekaInfoQueryParams:
    nonce: int = dataclasses.field(metadata={'query_param': { 'field_name': 'nonce', 'style': 'form', 'explode': True }})
    options: str = dataclasses.field(metadata={'query_param': { 'field_name': 'options', 'style': 'form', 'explode': True }})
    params: str = dataclasses.field(metadata={'query_param': { 'field_name': 'params', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class EurekaInfoRequest:
    query_params: EurekaInfoQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class EurekaInfoResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    example1: Optional[shared_example1.Example1] = dataclasses.field(default=None)
    
