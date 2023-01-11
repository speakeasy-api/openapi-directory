import dataclasses
from typing import Optional
from enum import Enum
from ..shared import simresult as shared_simresult

class GetSimSearchMetricEnum(str, Enum):
    PHENODIGM = "phenodigm"
    JACCARD = "jaccard"
    SIM_GIC = "simGIC"
    RESNIK = "resnik"
    SYMMETRIC_RESNIK = "symmetric_resnik"


@dataclasses.dataclass
class GetSimSearchQueryParams:
    id: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'id', 'style': 'form', 'explode': True }})
    is_feature_set: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'is_feature_set', 'style': 'form', 'explode': True }})
    limit: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    metric: Optional[GetSimSearchMetricEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'metric', 'style': 'form', 'explode': True }})
    taxon: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'taxon', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetSimSearchRequest:
    query_params: GetSimSearchQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetSimSearchResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    sim_result: Optional[shared_simresult.SimResult] = dataclasses.field(default=None)
    
