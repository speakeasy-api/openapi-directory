import dataclasses
from typing import Any,Optional
from ..shared import security as shared_security


@dataclasses.dataclass
class GetPlatformPathParams:
    platform_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'platformId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetPlatformSecurity:
    apikey: shared_security.SchemeApikey = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class GetPlatformRequest:
    path_params: GetPlatformPathParams = dataclasses.field()
    security: GetPlatformSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetPlatformResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_platform_200_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
