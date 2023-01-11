import dataclasses
from typing import Optional


@dataclasses.dataclass
class PostAppsAppIDPublishPathParams:
    app_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'appId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PostAppsAppIDPublishQueryParams:
    developer_id: str = dataclasses.field(metadata={'query_param': { 'field_name': 'developerId', 'style': 'form', 'explode': True }})
    version: int = dataclasses.field(metadata={'query_param': { 'field_name': 'version', 'style': 'form', 'explode': True }})
    auto_approve: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'autoApprove', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class PostAppsAppIDPublishRequest:
    path_params: PostAppsAppIDPublishPathParams = dataclasses.field()
    query_params: PostAppsAppIDPublishQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class PostAppsAppIDPublishResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
