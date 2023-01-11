import dataclasses
from enum import Enum

class GetMapVersionNumberWmtsKeyWmtsVersionWmtsCapabilitiesXMLWmtsVersionEnum(str, Enum):
    ONE_0_0 = "1.0.0"


@dataclasses.dataclass
class GetMapVersionNumberWmtsKeyWmtsVersionWmtsCapabilitiesXMLPathParams:
    key: str = dataclasses.field(metadata={'path_param': { 'field_name': 'key', 'style': 'simple', 'explode': False }})
    version_number: int = dataclasses.field(metadata={'path_param': { 'field_name': 'versionNumber', 'style': 'simple', 'explode': False }})
    wmts_version: GetMapVersionNumberWmtsKeyWmtsVersionWmtsCapabilitiesXMLWmtsVersionEnum = dataclasses.field(metadata={'path_param': { 'field_name': 'wmtsVersion', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetMapVersionNumberWmtsKeyWmtsVersionWmtsCapabilitiesXMLRequest:
    path_params: GetMapVersionNumberWmtsKeyWmtsVersionWmtsCapabilitiesXMLPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetMapVersionNumberWmtsKeyWmtsVersionWmtsCapabilitiesXMLResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
