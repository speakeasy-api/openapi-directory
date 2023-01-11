import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class ConvertURLQueryParams:
    url: str = dataclasses.field(metadata={'query_param': { 'field_name': 'url', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ConvertURLRequest:
    query_params: ConvertURLQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class ConvertURLResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    convert_url_200_application_json_any: Optional[Any] = dataclasses.field(default=None)
    
