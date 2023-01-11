import dataclasses
from ..shared import security as shared_security


@dataclasses.dataclass
class GetNumbersFactQueryParams:
    number: int = dataclasses.field(metadata={'query_param': { 'field_name': 'number', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetNumbersFactSecurity:
    x_mathtools_api_secret: shared_security.SchemeXMathtoolsAPISecret = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class GetNumbersFactRequest:
    query_params: GetNumbersFactQueryParams = dataclasses.field()
    security: GetNumbersFactSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetNumbersFactResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
