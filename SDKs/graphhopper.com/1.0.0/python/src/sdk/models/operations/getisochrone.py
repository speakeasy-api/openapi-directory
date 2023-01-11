import dataclasses
from typing import Optional
from enum import Enum
from ..shared import vehicleprofileid_enum as shared_vehicleprofileid_enum
from ..shared import gherror as shared_gherror
from ..shared import isochroneresponse as shared_isochroneresponse

class GetIsochroneWeightingEnum(str, Enum):
    FASTEST = "fastest"
    SHORTEST = "shortest"


@dataclasses.dataclass
class GetIsochroneQueryParams:
    point: str = dataclasses.field(metadata={'query_param': { 'field_name': 'point', 'style': 'form', 'explode': True }})
    buckets: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'buckets', 'style': 'form', 'explode': True }})
    distance_limit: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'distance_limit', 'style': 'form', 'explode': True }})
    reverse_flow: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'reverse_flow', 'style': 'form', 'explode': True }})
    time_limit: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'time_limit', 'style': 'form', 'explode': True }})
    vehicle: Optional[shared_vehicleprofileid_enum.VehicleProfileIDEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'vehicle', 'style': 'form', 'explode': True }})
    weighting: Optional[GetIsochroneWeightingEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'weighting', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetIsochroneRequest:
    query_params: GetIsochroneQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetIsochroneResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    gh_error: Optional[shared_gherror.GhError] = dataclasses.field(default=None)
    isochrone_response: Optional[shared_isochroneresponse.IsochroneResponse] = dataclasses.field(default=None)
    
