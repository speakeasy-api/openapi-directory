import dataclasses
from typing import Any,Optional
from ..shared import security as shared_security


@dataclasses.dataclass
class ListPlatformsQueryParams:
    aliases: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'aliases', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ListPlatformsSecurity:
    apikey: shared_security.SchemeApikey = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class ListPlatformsRequest:
    query_params: ListPlatformsQueryParams = dataclasses.field()
    security: ListPlatformsSecurity = dataclasses.field()
    

@dataclasses.dataclass
class ListPlatformsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    list_platforms_200_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
