import dataclasses
from typing import Optional


@dataclasses.dataclass
class PatchAppsAppIDVersionsVersionPathParams:
    app_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'appId', 'style': 'simple', 'explode': False }})
    version: str = dataclasses.field(metadata={'path_param': { 'field_name': 'version', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PatchAppsAppIDVersionsVersionQueryParams:
    developer_id: str = dataclasses.field(metadata={'query_param': { 'field_name': 'developerId', 'style': 'form', 'explode': True }})
    access: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'access', 'style': 'form', 'explode': True }})
    allow: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'allow', 'style': 'form', 'explode': True }})
    approval_required: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'approvalRequired', 'style': 'form', 'explode': True }})
    attributes: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'attributes', 'style': 'form', 'explode': True }})
    custom_data: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'customData', 'style': 'form', 'explode': True }})
    model: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'model', 'style': 'form', 'explode': True }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'name', 'style': 'form', 'explode': True }})
    restrict: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'restrict', 'style': 'form', 'explode': True }})
    type: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'type', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class PatchAppsAppIDVersionsVersionRequest:
    path_params: PatchAppsAppIDVersionsVersionPathParams = dataclasses.field()
    query_params: PatchAppsAppIDVersionsVersionQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class PatchAppsAppIDVersionsVersionResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    
