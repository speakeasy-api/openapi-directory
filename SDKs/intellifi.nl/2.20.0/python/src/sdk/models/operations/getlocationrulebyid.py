import dataclasses
from typing import Optional
from ..shared import locationrule as shared_locationrule


@dataclasses.dataclass
class GetLocationRuleByIDPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetLocationRuleByIDRequest:
    path_params: GetLocationRuleByIDPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetLocationRuleByIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    location_rule: Optional[shared_locationrule.LocationRule] = dataclasses.field(default=None)
    
