import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import meta as shared_meta


@dataclasses.dataclass
class GetResourcesMediaIDYoutubeMetaDataJSONPathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class GetResourcesMediaIDYoutubeMetaDataJSON200ApplicationJSON:
    callback: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('callback') }})
    meta: Optional[shared_meta.Meta] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    results: Optional[list[dict[str, Any]]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('results') }})
    

@dataclasses.dataclass
class GetResourcesMediaIDYoutubeMetaDataJSONRequest:
    path_params: GetResourcesMediaIDYoutubeMetaDataJSONPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetResourcesMediaIDYoutubeMetaDataJSONResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_resources_media_id_youtube_meta_data_json_200_application_json_object: Optional[GetResourcesMediaIDYoutubeMetaDataJSON200ApplicationJSON] = dataclasses.field(default=None)
    
