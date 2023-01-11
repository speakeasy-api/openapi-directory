import dataclasses
from ..shared import security as shared_security


@dataclasses.dataclass
class GetQshowQuotesQueryParams:
    id: str = dataclasses.field(metadata={'query_param': { 'field_name': 'id', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetQshowQuotesSecurity:
    x_they_said_so_api_secret: shared_security.SchemeXTheySaidSoAPISecret = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class GetQshowQuotesRequest:
    query_params: GetQshowQuotesQueryParams = dataclasses.field()
    security: GetQshowQuotesSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetQshowQuotesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
