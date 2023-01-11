import dataclasses
from ..shared import security as shared_security


@dataclasses.dataclass
class GetQshowQueryParams:
    id: str = dataclasses.field(metadata={'query_param': { 'field_name': 'id', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetQshowSecurity:
    x_they_said_so_api_secret: shared_security.SchemeXTheySaidSoAPISecret = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class GetQshowRequest:
    query_params: GetQshowQueryParams = dataclasses.field()
    security: GetQshowSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetQshowResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
