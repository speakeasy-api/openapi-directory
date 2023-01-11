import dataclasses
from ..shared import security as shared_security


@dataclasses.dataclass
class DeleteQuoteImageFontQueryParams:
    id: str = dataclasses.field(metadata={'query_param': { 'field_name': 'id', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class DeleteQuoteImageFontSecurity:
    x_they_said_so_api_secret: shared_security.SchemeXTheySaidSoAPISecret = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class DeleteQuoteImageFontRequest:
    query_params: DeleteQuoteImageFontQueryParams = dataclasses.field()
    security: DeleteQuoteImageFontSecurity = dataclasses.field()
    

@dataclasses.dataclass
class DeleteQuoteImageFontResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
