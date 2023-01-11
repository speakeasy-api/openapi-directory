import dataclasses
from ..shared import security as shared_security


@dataclasses.dataclass
class PostQuoteDislikeQueryParams:
    quote_id: str = dataclasses.field(metadata={'query_param': { 'field_name': 'quote_id', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class PostQuoteDislikeSecurity:
    x_they_said_so_api_secret: shared_security.SchemeXTheySaidSoAPISecret = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class PostQuoteDislikeRequest:
    query_params: PostQuoteDislikeQueryParams = dataclasses.field()
    security: PostQuoteDislikeSecurity = dataclasses.field()
    

@dataclasses.dataclass
class PostQuoteDislikeResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
