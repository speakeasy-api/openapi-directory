import dataclasses
from enum import Enum

class GetFeatureTypesOutputFormatEnum(str, Enum):
    JSON = "json"
    XML = "xml"


@dataclasses.dataclass
class GetFeatureTypesQueryParams:
    output_format: GetFeatureTypesOutputFormatEnum = dataclasses.field(metadata={'query_param': { 'field_name': 'outputFormat', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetFeatureTypesRequest:
    query_params: GetFeatureTypesQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetFeatureTypesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
