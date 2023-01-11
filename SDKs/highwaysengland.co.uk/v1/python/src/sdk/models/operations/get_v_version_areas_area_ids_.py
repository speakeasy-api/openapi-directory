import dataclasses
from typing import Optional
from ..shared import arearesponse as shared_arearesponse


@dataclasses.dataclass
class GetVVersionAreasAreaIdsPathParams:
    area_ids: str = dataclasses.field(metadata={'path_param': { 'field_name': 'area_Ids', 'style': 'simple', 'explode': False }})
    version: str = dataclasses.field(metadata={'path_param': { 'field_name': 'version', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetVVersionAreasAreaIdsRequest:
    path_params: GetVVersionAreasAreaIdsPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetVVersionAreasAreaIdsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    area_response: Optional[shared_arearesponse.AreaResponse] = dataclasses.field(default=None)
    
