import dataclasses
from typing import Optional


@dataclasses.dataclass
class GetResourcesTagsIDSyndicateFormatPathParams:
    format: str = dataclasses.field(metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetResourcesTagsIDSyndicateFormatQueryParams:
    display_method: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'displayMethod', 'style': 'form', 'explode': False }})
    

@dataclasses.dataclass
class GetResourcesTagsIDSyndicateFormatRequest:
    path_params: GetResourcesTagsIDSyndicateFormatPathParams = dataclasses.field()
    query_params: GetResourcesTagsIDSyndicateFormatQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetResourcesTagsIDSyndicateFormatResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_resources_tags_id_syndicate_format_200_application_json_string: Optional[str] = dataclasses.field(default=None)
    
