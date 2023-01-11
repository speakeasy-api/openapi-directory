import dataclasses
from typing import Optional


@dataclasses.dataclass
class GetPermissionAppsAppIDPathParams:
    app_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'appId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetPermissionAppsAppIDQueryParams:
    user_id: str = dataclasses.field(metadata={'query_param': { 'field_name': 'userId', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetPermissionAppsAppIDRequest:
    path_params: GetPermissionAppsAppIDPathParams = dataclasses.field()
    query_params: GetPermissionAppsAppIDQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetPermissionAppsAppIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    
