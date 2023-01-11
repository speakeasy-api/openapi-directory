import dataclasses
from typing import Optional


@dataclasses.dataclass
class GetAppsBySafeNameSafeNamePathParams:
    safe_name: str = dataclasses.field(metadata={'path_param': { 'field_name': 'safeName', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetAppsBySafeNameSafeNameQueryParams:
    track_views: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'trackViews', 'style': 'form', 'explode': True }})
    user_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'userId', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetAppsBySafeNameSafeNameRequest:
    path_params: GetAppsBySafeNameSafeNamePathParams = dataclasses.field()
    query_params: GetAppsBySafeNameSafeNameQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetAppsBySafeNameSafeNameResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    
