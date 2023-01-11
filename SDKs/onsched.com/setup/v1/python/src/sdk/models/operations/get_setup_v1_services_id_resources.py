import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class GetSetupV1ServicesIDResourcesPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetSetupV1ServicesIDResourcesQueryParams:
    google_auth_return_url: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'googleAuthReturnUrl', 'style': 'form', 'explode': True }})
    limit: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    outlook_auth_return_url: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'outlookAuthReturnUrl', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetSetupV1ServicesIDResourcesRequest:
    path_params: GetSetupV1ServicesIDResourcesPathParams = dataclasses.field()
    query_params: GetSetupV1ServicesIDResourcesQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetSetupV1ServicesIDResourcesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    resource_list_view_model: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
