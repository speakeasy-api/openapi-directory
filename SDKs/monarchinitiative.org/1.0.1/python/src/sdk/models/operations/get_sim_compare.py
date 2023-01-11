import dataclasses
from typing import Optional
from enum import Enum
from ..shared import simresult as shared_simresult

class GetSimCompareMetricEnum(str, Enum):
    PHENODIGM = "phenodigm"
    JACCARD = "jaccard"
    SIM_GIC = "simGIC"
    RESNIK = "resnik"
    SYMMETRIC_RESNIK = "symmetric_resnik"


@dataclasses.dataclass
class GetSimCompareQueryParams:
    is_feature_set: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'is_feature_set', 'style': 'form', 'explode': True }})
    metric: Optional[GetSimCompareMetricEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'metric', 'style': 'form', 'explode': True }})
    query_id: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'query_id', 'style': 'form', 'explode': True }})
    ref_id: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'ref_id', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetSimCompareRequest:
    query_params: GetSimCompareQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetSimCompareResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    sim_result: Optional[shared_simresult.SimResult] = dataclasses.field(default=None)
    
