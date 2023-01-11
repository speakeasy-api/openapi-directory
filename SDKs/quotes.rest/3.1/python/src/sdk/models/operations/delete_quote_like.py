import dataclasses
from ..shared import security as shared_security


@dataclasses.dataclass
class DeleteQuoteLikeQueryParams:
    quote_id: str = dataclasses.field(metadata={'query_param': { 'field_name': 'quote_id', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class DeleteQuoteLikeSecurity:
    x_they_said_so_api_secret: shared_security.SchemeXTheySaidSoAPISecret = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class DeleteQuoteLikeRequest:
    query_params: DeleteQuoteLikeQueryParams = dataclasses.field()
    security: DeleteQuoteLikeSecurity = dataclasses.field()
    

@dataclasses.dataclass
class DeleteQuoteLikeResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
