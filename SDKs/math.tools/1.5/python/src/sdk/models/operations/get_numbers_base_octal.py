import dataclasses
from typing import Optional
from ..shared import security as shared_security


@dataclasses.dataclass
class GetNumbersBaseOctalQueryParams:
    number: int = dataclasses.field(metadata={'query_param': { 'field_name': 'number', 'style': 'form', 'explode': True }})
    from_: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'from', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetNumbersBaseOctalSecurity:
    x_mathtools_api_secret: shared_security.SchemeXMathtoolsAPISecret = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class GetNumbersBaseOctalRequest:
    query_params: GetNumbersBaseOctalQueryParams = dataclasses.field()
    security: GetNumbersBaseOctalSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetNumbersBaseOctalResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
