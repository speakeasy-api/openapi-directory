import dataclasses
from typing import Optional
from ..shared import analyticstoken as shared_analyticstoken


@dataclasses.dataclass
class GetAnalyticsTokenPathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetAnalyticsTokenRequest:
    path_params: GetAnalyticsTokenPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetAnalyticsTokenResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    analytics_token: Optional[shared_analyticstoken.AnalyticsToken] = dataclasses.field(default=None)
    
