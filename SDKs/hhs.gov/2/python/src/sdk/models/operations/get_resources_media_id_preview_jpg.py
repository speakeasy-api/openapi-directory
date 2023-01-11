import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class GetResourcesMediaIDPreviewJpgPathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetResourcesMediaIDPreviewJpgRequest:
    path_params: GetResourcesMediaIDPreviewJpgPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetResourcesMediaIDPreviewJpgResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_resources_media_id_preview_jpg_200_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
