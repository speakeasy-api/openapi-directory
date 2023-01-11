import dataclasses
from typing import Optional
from ..shared import security as shared_security


@dataclasses.dataclass
class GetNumbersPiQueryParams:
    from_: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'from', 'style': 'form', 'explode': True }})
    to: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'to', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetNumbersPiSecurity:
    x_mathtools_api_secret: shared_security.SchemeXMathtoolsAPISecret = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class GetNumbersPiRequest:
    query_params: GetNumbersPiQueryParams = dataclasses.field()
    security: GetNumbersPiSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetNumbersPiResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
