import dataclasses
from typing import Optional
from ..shared import customvisionerror as shared_customvisionerror
from ..shared import imageregionproposal as shared_imageregionproposal


@dataclasses.dataclass
class GetImageRegionProposalsPathParams:
    image_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'imageId', 'style': 'simple', 'explode': False }})
    project_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'projectId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetImageRegionProposalsRequest:
    path_params: GetImageRegionProposalsPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetImageRegionProposalsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    custom_vision_error: Optional[shared_customvisionerror.CustomVisionError] = dataclasses.field(default=None)
    image_region_proposal: Optional[shared_imageregionproposal.ImageRegionProposal] = dataclasses.field(default=None)
    
