import dataclasses
from typing import Any,Optional
from ..shared import security as shared_security


@dataclasses.dataclass
class ListPlatformRegionsPathParams:
    platform_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'platformId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ListPlatformRegionsQueryParams:
    aliases: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'aliases', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ListPlatformRegionsSecurity:
    apikey: shared_security.SchemeApikey = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class ListPlatformRegionsRequest:
    path_params: ListPlatformRegionsPathParams = dataclasses.field()
    query_params: ListPlatformRegionsQueryParams = dataclasses.field()
    security: ListPlatformRegionsSecurity = dataclasses.field()
    

@dataclasses.dataclass
class ListPlatformRegionsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    list_platform_regions_200_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
