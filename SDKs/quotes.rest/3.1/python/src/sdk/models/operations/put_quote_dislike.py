import dataclasses
from ..shared import security as shared_security


@dataclasses.dataclass
class PutQuoteDislikeQueryParams:
    quote_id: str = dataclasses.field(metadata={'query_param': { 'field_name': 'quote_id', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class PutQuoteDislikeSecurity:
    x_they_said_so_api_secret: shared_security.SchemeXTheySaidSoAPISecret = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class PutQuoteDislikeRequest:
    query_params: PutQuoteDislikeQueryParams = dataclasses.field()
    security: PutQuoteDislikeSecurity = dataclasses.field()
    

@dataclasses.dataclass
class PutQuoteDislikeResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
