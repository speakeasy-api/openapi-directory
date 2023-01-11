import dataclasses
from typing import Optional
from enum import Enum
from ..shared import rackunit as shared_rackunit


@dataclasses.dataclass
class DcimRacksElevationPathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    
class DcimRacksElevationFaceEnum(str, Enum):
    FRONT = "front"
    REAR = "rear"

class DcimRacksElevationRenderEnum(str, Enum):
    JSON = "json"
    SVG = "svg"


@dataclasses.dataclass
class DcimRacksElevationQueryParams:
    exclude: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'exclude', 'style': 'form', 'explode': True }})
    expand_devices: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'expand_devices', 'style': 'form', 'explode': True }})
    face: Optional[DcimRacksElevationFaceEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'face', 'style': 'form', 'explode': True }})
    include_images: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'include_images', 'style': 'form', 'explode': True }})
    legend_width: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'legend_width', 'style': 'form', 'explode': True }})
    q: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'q', 'style': 'form', 'explode': True }})
    render: Optional[DcimRacksElevationRenderEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'render', 'style': 'form', 'explode': True }})
    unit_height: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'unit_height', 'style': 'form', 'explode': True }})
    unit_width: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'unit_width', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class DcimRacksElevationRequest:
    path_params: DcimRacksElevationPathParams = dataclasses.field()
    query_params: DcimRacksElevationQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class DcimRacksElevationResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    rack_units: Optional[list[shared_rackunit.RackUnit]] = dataclasses.field(default=None)
    
