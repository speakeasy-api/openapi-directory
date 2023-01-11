import dataclasses
from typing import Optional


@dataclasses.dataclass
class GetAppsAppIDPathParams:
    app_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'appId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetAppsAppIDQueryParams:
    track_views: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'trackViews', 'style': 'form', 'explode': True }})
    user_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'userId', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetAppsAppIDRequest:
    path_params: GetAppsAppIDPathParams = dataclasses.field()
    query_params: GetAppsAppIDQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetAppsAppIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    
