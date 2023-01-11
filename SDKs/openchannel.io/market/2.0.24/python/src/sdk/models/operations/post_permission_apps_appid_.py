import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional


@dataclasses.dataclass
class PostPermissionAppsAppIDPathParams:
    app_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'appId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PostPermissionAppsAppIDQueryParams:
    user_id: str = dataclasses.field(metadata={'query_param': { 'field_name': 'userId', 'style': 'form', 'explode': True }})
    date_: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'date', 'style': 'form', 'explode': True }})
    ip: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'ip', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class PostPermissionAppsAppIDRequest:
    path_params: PostPermissionAppsAppIDPathParams = dataclasses.field()
    query_params: PostPermissionAppsAppIDQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class PostPermissionAppsAppIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    
