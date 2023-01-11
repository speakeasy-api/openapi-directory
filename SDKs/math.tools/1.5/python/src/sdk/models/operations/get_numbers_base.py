import dataclasses
from typing import Optional
from ..shared import security as shared_security


@dataclasses.dataclass
class GetNumbersBaseQueryParams:
    number: int = dataclasses.field(metadata={'query_param': { 'field_name': 'number', 'style': 'form', 'explode': True }})
    to: int = dataclasses.field(metadata={'query_param': { 'field_name': 'to', 'style': 'form', 'explode': True }})
    from_: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'from', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetNumbersBaseSecurity:
    x_mathtools_api_secret: shared_security.SchemeXMathtoolsAPISecret = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class GetNumbersBaseRequest:
    query_params: GetNumbersBaseQueryParams = dataclasses.field()
    security: GetNumbersBaseSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetNumbersBaseResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
