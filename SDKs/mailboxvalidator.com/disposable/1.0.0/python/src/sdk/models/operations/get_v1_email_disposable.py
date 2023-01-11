import dataclasses
from typing import Optional
from enum import Enum

class GetV1EmailDisposableFormatEnum(str, Enum):
    JSON = "json"
    XML = "xml"


@dataclasses.dataclass
class GetV1EmailDisposableQueryParams:
    email: str = dataclasses.field(metadata={'query_param': { 'field_name': 'email', 'style': 'form', 'explode': True }})
    key: str = dataclasses.field(metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    format: Optional[GetV1EmailDisposableFormatEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'format', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetV1EmailDisposableRequest:
    query_params: GetV1EmailDisposableQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetV1EmailDisposableResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_v1_email_disposable_200_application_json_string: Optional[str] = dataclasses.field(default=None)
    
