import dataclasses
from typing import Optional
from ..shared import customvisionerror as shared_customvisionerror
from ..shared import suggestedtagandregion as shared_suggestedtagandregion


@dataclasses.dataclass
class SuggestTagsAndRegionsPathParams:
    project_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'projectId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class SuggestTagsAndRegionsQueryParams:
    image_ids: list[str] = dataclasses.field(metadata={'query_param': { 'field_name': 'imageIds', 'style': 'form', 'explode': False }})
    iteration_id: str = dataclasses.field(metadata={'query_param': { 'field_name': 'iterationId', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class SuggestTagsAndRegionsHeaders:
    training_key: str = dataclasses.field(metadata={'header': { 'field_name': 'Training-Key', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class SuggestTagsAndRegionsRequest:
    headers: SuggestTagsAndRegionsHeaders = dataclasses.field()
    path_params: SuggestTagsAndRegionsPathParams = dataclasses.field()
    query_params: SuggestTagsAndRegionsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class SuggestTagsAndRegionsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    custom_vision_error: Optional[shared_customvisionerror.CustomVisionError] = dataclasses.field(default=None)
    suggested_tag_and_regions: Optional[list[shared_suggestedtagandregion.SuggestedTagAndRegion]] = dataclasses.field(default=None)
    
