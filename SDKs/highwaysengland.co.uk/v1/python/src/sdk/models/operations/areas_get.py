import dataclasses
from typing import Optional
from ..shared import arearesponse as shared_arearesponse


@dataclasses.dataclass
class AreasGetPathParams:
    version: str = dataclasses.field(metadata={'path_param': { 'field_name': 'version', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class AreasGetRequest:
    path_params: AreasGetPathParams = dataclasses.field()
    

@dataclasses.dataclass
class AreasGetResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    area_response: Optional[shared_arearesponse.AreaResponse] = dataclasses.field(default=None)
    
