import dataclasses
from typing import Optional
from enum import Enum
from ..shared import vehicleprofileid_enum as shared_vehicleprofileid_enum
from ..shared import gherror as shared_gherror
from ..shared import matrixresponse as shared_matrixresponse

class GetMatrixCurbsideEnum(str, Enum):
    ANY = "any"
    RIGHT = "right"
    LEFT = "left"

class GetMatrixFromCurbsideEnum(str, Enum):
    ANY = "any"
    RIGHT = "right"
    LEFT = "left"

class GetMatrixToCurbsideEnum(str, Enum):
    ANY = "any"
    RIGHT = "right"
    LEFT = "left"


@dataclasses.dataclass
class GetMatrixQueryParams:
    curbside: Optional[list[GetMatrixCurbsideEnum]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'curbside', 'style': 'form', 'explode': True }})
    fail_fast: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'fail_fast', 'style': 'form', 'explode': True }})
    from_curbside: Optional[list[GetMatrixFromCurbsideEnum]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'from_curbside', 'style': 'form', 'explode': True }})
    from_point: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'from_point', 'style': 'form', 'explode': True }})
    from_point_hint: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'from_point_hint', 'style': 'form', 'explode': True }})
    out_array: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'out_array', 'style': 'form', 'explode': True }})
    point: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'point', 'style': 'form', 'explode': True }})
    point_hint: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'point_hint', 'style': 'form', 'explode': True }})
    snap_prevention: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'snap_prevention', 'style': 'form', 'explode': True }})
    to_curbside: Optional[list[GetMatrixToCurbsideEnum]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'to_curbside', 'style': 'form', 'explode': True }})
    to_point: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'to_point', 'style': 'form', 'explode': True }})
    to_point_hint: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'to_point_hint', 'style': 'form', 'explode': True }})
    turn_costs: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'turn_costs', 'style': 'form', 'explode': True }})
    vehicle: Optional[shared_vehicleprofileid_enum.VehicleProfileIDEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'vehicle', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetMatrixRequest:
    query_params: GetMatrixQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetMatrixResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    gh_error: Optional[shared_gherror.GhError] = dataclasses.field(default=None)
    matrix_response: Optional[shared_matrixresponse.MatrixResponse] = dataclasses.field(default=None)
    
