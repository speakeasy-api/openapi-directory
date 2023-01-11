import dataclasses
from typing import Any,Optional
from enum import Enum
from ..shared import format_enum as shared_format_enum
from ..shared import searchresponse as shared_searchresponse
from ..shared import searcherrorresponse as shared_searcherrorresponse


@dataclasses.dataclass
class VerifySearchPathParams:
    format: shared_format_enum.FormatEnum = dataclasses.field(metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class VerifySearchQueryParams:
    api_key: str = dataclasses.field(metadata={'query_param': { 'field_name': 'api_key', 'style': 'form', 'explode': True }})
    api_secret: str = dataclasses.field(metadata={'query_param': { 'field_name': 'api_secret', 'style': 'form', 'explode': True }})
    request_id: str = dataclasses.field(metadata={'query_param': { 'field_name': 'request_id', 'style': 'form', 'explode': True }})
    request_ids: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'request_ids', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class VerifySearchRequest:
    path_params: VerifySearchPathParams = dataclasses.field()
    query_params: VerifySearchQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class VerifySearchResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    verify_search_200_application_json_one_of: Optional[Any] = dataclasses.field(default=None)
    
