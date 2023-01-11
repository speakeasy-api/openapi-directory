import dataclasses
from enum import Enum

class GetFeatureCategoriesOutputFormatEnum(str, Enum):
    JSON = "json"
    XML = "xml"


@dataclasses.dataclass
class GetFeatureCategoriesQueryParams:
    output_format: GetFeatureCategoriesOutputFormatEnum = dataclasses.field(metadata={'query_param': { 'field_name': 'outputFormat', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetFeatureCategoriesRequest:
    query_params: GetFeatureCategoriesQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetFeatureCategoriesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
