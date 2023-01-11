import dataclasses
from typing import Optional


@dataclasses.dataclass
class GetAppsAppIDVersionsVersionPathParams:
    app_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'appId', 'style': 'simple', 'explode': False }})
    version: int = dataclasses.field(metadata={'path_param': { 'field_name': 'version', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetAppsAppIDVersionsVersionQueryParams:
    developer_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'developerId', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetAppsAppIDVersionsVersionRequest:
    path_params: GetAppsAppIDVersionsVersionPathParams = dataclasses.field()
    query_params: GetAppsAppIDVersionsVersionQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetAppsAppIDVersionsVersionResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    
