import dataclasses
from enum import Enum

class GetParcelsPidsSiteIDOutputFormatOutputFormatEnum(str, Enum):
    JSON = "json"
    GEOJSON = "geojson"
    XHTML = "xhtml"
    KML = "kml"
    GML = "gml"
    CSV = "csv"
    SHPZ = "shpz"


@dataclasses.dataclass
class GetParcelsPidsSiteIDOutputFormatPathParams:
    output_format: GetParcelsPidsSiteIDOutputFormatOutputFormatEnum = dataclasses.field(metadata={'path_param': { 'field_name': 'outputFormat', 'style': 'simple', 'explode': False }})
    site_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'siteID', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetParcelsPidsSiteIDOutputFormatRequest:
    path_params: GetParcelsPidsSiteIDOutputFormatPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetParcelsPidsSiteIDOutputFormatResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
