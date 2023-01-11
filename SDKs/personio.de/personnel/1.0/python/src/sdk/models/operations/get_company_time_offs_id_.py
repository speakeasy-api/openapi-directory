import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class GetCompanyTimeOffsIDPathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetCompanyTimeOffsIDRequest:
    path_params: GetCompanyTimeOffsIDPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetCompanyTimeOffsIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    absence_period_response: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
