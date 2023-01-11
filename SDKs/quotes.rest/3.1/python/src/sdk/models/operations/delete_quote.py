import dataclasses
from ..shared import security as shared_security


@dataclasses.dataclass
class DeleteQuoteQueryParams:
    id: str = dataclasses.field(metadata={'query_param': { 'field_name': 'id', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class DeleteQuoteSecurity:
    x_they_said_so_api_secret: shared_security.SchemeXTheySaidSoAPISecret = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class DeleteQuoteRequest:
    query_params: DeleteQuoteQueryParams = dataclasses.field()
    security: DeleteQuoteSecurity = dataclasses.field()
    

@dataclasses.dataclass
class DeleteQuoteResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
