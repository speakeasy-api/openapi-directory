import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class GetResourcesMediaIDThumbnailJpgPathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetResourcesMediaIDThumbnailJpgRequest:
    path_params: GetResourcesMediaIDThumbnailJpgPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetResourcesMediaIDThumbnailJpgResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_resources_media_id_thumbnail_jpg_200_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
