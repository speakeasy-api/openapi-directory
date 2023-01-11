import dataclasses
from typing import Optional
from ..shared import tagfilter as shared_tagfilter
from ..shared import customvisionerror as shared_customvisionerror


@dataclasses.dataclass
class QuerySuggestedImageCountPathParams:
    project_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'projectId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class QuerySuggestedImageCountQueryParams:
    iteration_id: str = dataclasses.field(metadata={'query_param': { 'field_name': 'iterationId', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class QuerySuggestedImageCountRequests:
    application_xml: bytes = dataclasses.field(metadata={'request': { 'media_type': 'application/xml' }})
    text_xml: bytes = dataclasses.field(metadata={'request': { 'media_type': 'text/xml' }})
    tag_filter: Optional[shared_tagfilter.TagFilter] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    tag_filter1: Optional[shared_tagfilter.TagFilter] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    

@dataclasses.dataclass
class QuerySuggestedImageCountRequest:
    path_params: QuerySuggestedImageCountPathParams = dataclasses.field()
    query_params: QuerySuggestedImageCountQueryParams = dataclasses.field()
    request: QuerySuggestedImageCountRequests = dataclasses.field()
    

@dataclasses.dataclass
class QuerySuggestedImageCountResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    custom_vision_error: Optional[shared_customvisionerror.CustomVisionError] = dataclasses.field(default=None)
    query_suggested_image_count_200_application_json_object: Optional[dict[str, int]] = dataclasses.field(default=None)
    
