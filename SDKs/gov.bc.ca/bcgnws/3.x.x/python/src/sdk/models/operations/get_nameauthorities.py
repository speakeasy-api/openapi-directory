import dataclasses
from enum import Enum

class GetNameAuthoritiesOutputFormatEnum(str, Enum):
    JSON = "json"
    XML = "xml"


@dataclasses.dataclass
class GetNameAuthoritiesQueryParams:
    output_format: GetNameAuthoritiesOutputFormatEnum = dataclasses.field(metadata={'query_param': { 'field_name': 'outputFormat', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetNameAuthoritiesRequest:
    query_params: GetNameAuthoritiesQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetNameAuthoritiesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
