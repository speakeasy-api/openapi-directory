import dataclasses
from typing import Optional


@dataclasses.dataclass
class GetResourcesMediaIDEmbedJSONPathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetResourcesMediaIDEmbedJSONQueryParams:
    display_method: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'displayMethod', 'style': 'form', 'explode': False }})
    div_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'divId', 'style': 'form', 'explode': False }})
    exclude_div: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'excludeDiv', 'style': 'form', 'explode': False }})
    exclude_jquery: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'excludeJquery', 'style': 'form', 'explode': False }})
    flavor: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'flavor', 'style': 'form', 'explode': False }})
    height: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'height', 'style': 'form', 'explode': False }})
    iframe_name: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'iframeName', 'style': 'form', 'explode': False }})
    width: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'width', 'style': 'form', 'explode': False }})
    

@dataclasses.dataclass
class GetResourcesMediaIDEmbedJSONRequest:
    path_params: GetResourcesMediaIDEmbedJSONPathParams = dataclasses.field()
    query_params: GetResourcesMediaIDEmbedJSONQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetResourcesMediaIDEmbedJSONResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_resources_media_id_embed_json_200_application_json_string: Optional[str] = dataclasses.field(default=None)
    
