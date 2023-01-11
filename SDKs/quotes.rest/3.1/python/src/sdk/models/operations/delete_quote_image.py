import dataclasses
from ..shared import security as shared_security


@dataclasses.dataclass
class DeleteQuoteImageQueryParams:
    id: str = dataclasses.field(metadata={'query_param': { 'field_name': 'id', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class DeleteQuoteImageSecurity:
    x_they_said_so_api_secret: shared_security.SchemeXTheySaidSoAPISecret = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class DeleteQuoteImageRequest:
    query_params: DeleteQuoteImageQueryParams = dataclasses.field()
    security: DeleteQuoteImageSecurity = dataclasses.field()
    

@dataclasses.dataclass
class DeleteQuoteImageResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
