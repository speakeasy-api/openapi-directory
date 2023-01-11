import dataclasses
from typing import Optional
from ..shared import testecho as shared_testecho


@dataclasses.dataclass
class EchoQueryParams:
    text: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'text', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class EchoRequest:
    query_params: EchoQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class EchoResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    test_echo: Optional[shared_testecho.TestEcho] = dataclasses.field(default=None)
    
