import dataclasses
from enum import Enum

class GetFeatureClassesOutputFormatEnum(str, Enum):
    JSON = "json"
    XML = "xml"


@dataclasses.dataclass
class GetFeatureClassesQueryParams:
    output_format: GetFeatureClassesOutputFormatEnum = dataclasses.field(metadata={'query_param': { 'field_name': 'outputFormat', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetFeatureClassesRequest:
    query_params: GetFeatureClassesQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetFeatureClassesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
