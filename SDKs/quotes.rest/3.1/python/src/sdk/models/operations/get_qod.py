import dataclasses
from typing import Any,Optional
from ..shared import security as shared_security


@dataclasses.dataclass
class GetQodQueryParams:
    category: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'category', 'style': 'form', 'explode': True }})
    language: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'language', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetQodSecurity:
    x_they_said_so_api_secret: shared_security.SchemeXTheySaidSoAPISecret = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class GetQodRequest:
    query_params: GetQodQueryParams = dataclasses.field()
    security: GetQodSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetQodResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    quote_response: Optional[Any] = dataclasses.field(default=None)
    
