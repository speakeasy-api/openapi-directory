import dataclasses
from ..shared import security as shared_security


@dataclasses.dataclass
class GetNumbersNodSecurity:
    x_mathtools_api_secret: shared_security.SchemeXMathtoolsAPISecret = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class GetNumbersNodRequest:
    security: GetNumbersNodSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetNumbersNodResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
