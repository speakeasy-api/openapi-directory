import dataclasses
from typing import Optional


@dataclasses.dataclass
class GetPlanIDPathParams:
    plan_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'planId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetPlanIDQueryParams:
    location_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'locationId', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetPlanIDRequest:
    path_params: GetPlanIDPathParams = dataclasses.field()
    query_params: GetPlanIDQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetPlanIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
