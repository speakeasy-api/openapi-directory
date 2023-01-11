import dataclasses
from typing import Optional
from ..shared import suggestedtagandregionquerytoken as shared_suggestedtagandregionquerytoken
from ..shared import customvisionerror as shared_customvisionerror
from ..shared import suggestedtagandregionquery as shared_suggestedtagandregionquery


@dataclasses.dataclass
class QuerySuggestedImagesPathParams:
    project_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'projectId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class QuerySuggestedImagesQueryParams:
    iteration_id: str = dataclasses.field(metadata={'query_param': { 'field_name': 'iterationId', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class QuerySuggestedImagesHeaders:
    training_key: str = dataclasses.field(metadata={'header': { 'field_name': 'Training-Key', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class QuerySuggestedImagesRequests:
    application_xml: bytes = dataclasses.field(metadata={'request': { 'media_type': 'application/xml' }})
    text_xml: bytes = dataclasses.field(metadata={'request': { 'media_type': 'text/xml' }})
    suggested_tag_and_region_query_token: Optional[shared_suggestedtagandregionquerytoken.SuggestedTagAndRegionQueryToken] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    suggested_tag_and_region_query_token1: Optional[shared_suggestedtagandregionquerytoken.SuggestedTagAndRegionQueryToken] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    

@dataclasses.dataclass
class QuerySuggestedImagesRequest:
    headers: QuerySuggestedImagesHeaders = dataclasses.field()
    path_params: QuerySuggestedImagesPathParams = dataclasses.field()
    query_params: QuerySuggestedImagesQueryParams = dataclasses.field()
    request: QuerySuggestedImagesRequests = dataclasses.field()
    

@dataclasses.dataclass
class QuerySuggestedImagesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    custom_vision_error: Optional[shared_customvisionerror.CustomVisionError] = dataclasses.field(default=None)
    suggested_tag_and_region_query: Optional[shared_suggestedtagandregionquery.SuggestedTagAndRegionQuery] = dataclasses.field(default=None)
    
