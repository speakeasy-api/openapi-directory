import dataclasses
from typing import Optional
from ..shared import security as shared_security


@dataclasses.dataclass
class GetQuoteImageQueryParams:
    id: str = dataclasses.field(metadata={'query_param': { 'field_name': 'id', 'style': 'form', 'explode': True }})
    binary: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'binary', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetQuoteImageSecurity:
    x_they_said_so_api_secret: shared_security.SchemeXTheySaidSoAPISecret = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class GetQuoteImageRequest:
    query_params: GetQuoteImageQueryParams = dataclasses.field()
    security: GetQuoteImageSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetQuoteImageResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
