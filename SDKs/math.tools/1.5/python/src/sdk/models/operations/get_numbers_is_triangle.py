import dataclasses
from typing import Optional
from ..shared import security as shared_security


@dataclasses.dataclass
class GetNumbersIsTriangleQueryParams:
    number: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'number', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetNumbersIsTriangleSecurity:
    x_mathtools_api_secret: shared_security.SchemeXMathtoolsAPISecret = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class GetNumbersIsTriangleRequest:
    query_params: GetNumbersIsTriangleQueryParams = dataclasses.field()
    security: GetNumbersIsTriangleSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetNumbersIsTriangleResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
