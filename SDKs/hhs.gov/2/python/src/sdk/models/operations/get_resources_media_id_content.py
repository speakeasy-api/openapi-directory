import dataclasses
from typing import Optional


@dataclasses.dataclass
class GetResourcesMediaIDContentPathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetResourcesMediaIDContentQueryParams:
    called_by_build: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'calledByBuild', 'style': 'form', 'explode': False }})
    

@dataclasses.dataclass
class GetResourcesMediaIDContentRequest:
    path_params: GetResourcesMediaIDContentPathParams = dataclasses.field()
    query_params: GetResourcesMediaIDContentQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetResourcesMediaIDContentResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_resources_media_id_content_200_application_json_string: Optional[str] = dataclasses.field(default=None)
    
