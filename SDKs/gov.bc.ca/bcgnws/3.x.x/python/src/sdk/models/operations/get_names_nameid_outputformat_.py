import dataclasses
from enum import Enum

class GetNamesNameIDOutputFormatOutputFormatEnum(str, Enum):
    JSON = "json"
    XML = "xml"
    KML = "kml"
    CSV = "csv"
    HTML = "html"


@dataclasses.dataclass
class GetNamesNameIDOutputFormatPathParams:
    name_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'nameId', 'style': 'simple', 'explode': False }})
    output_format: GetNamesNameIDOutputFormatOutputFormatEnum = dataclasses.field(metadata={'path_param': { 'field_name': 'outputFormat', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetNamesNameIDOutputFormatRequest:
    path_params: GetNamesNameIDOutputFormatPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetNamesNameIDOutputFormatResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
