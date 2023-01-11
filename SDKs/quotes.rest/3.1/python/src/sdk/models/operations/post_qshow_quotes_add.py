import dataclasses
from ..shared import security as shared_security


@dataclasses.dataclass
class PostQshowQuotesAddQueryParams:
    id: str = dataclasses.field(metadata={'query_param': { 'field_name': 'id', 'style': 'form', 'explode': True }})
    quoteid: str = dataclasses.field(metadata={'query_param': { 'field_name': 'quoteid', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class PostQshowQuotesAddSecurity:
    x_they_said_so_api_secret: shared_security.SchemeXTheySaidSoAPISecret = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class PostQshowQuotesAddRequest:
    query_params: PostQshowQuotesAddQueryParams = dataclasses.field()
    security: PostQshowQuotesAddSecurity = dataclasses.field()
    

@dataclasses.dataclass
class PostQshowQuotesAddResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
