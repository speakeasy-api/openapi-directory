import dataclasses
from typing import Optional
from ..shared import errornotfound as shared_errornotfound
from ..shared import serviceplan as shared_serviceplan


@dataclasses.dataclass
class ShowServicePlanPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ShowServicePlanRequest:
    path_params: ShowServicePlanPathParams = dataclasses.field()
    

@dataclasses.dataclass
class ShowServicePlanResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error_not_found: Optional[shared_errornotfound.ErrorNotFound] = dataclasses.field(default=None)
    service_plan: Optional[shared_serviceplan.ServicePlan] = dataclasses.field(default=None)
    
