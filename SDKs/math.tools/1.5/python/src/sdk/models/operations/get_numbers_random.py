import dataclasses
from typing import Optional
from ..shared import security as shared_security


@dataclasses.dataclass
class GetNumbersRandomQueryParams:
    max: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'max', 'style': 'form', 'explode': True }})
    min: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'min', 'style': 'form', 'explode': True }})
    total: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'total', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetNumbersRandomSecurity:
    x_mathtools_api_secret: shared_security.SchemeXMathtoolsAPISecret = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class GetNumbersRandomRequest:
    query_params: GetNumbersRandomQueryParams = dataclasses.field()
    security: GetNumbersRandomSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetNumbersRandomResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
