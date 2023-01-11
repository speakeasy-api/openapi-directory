import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googleclouddatalabelingv1beta1normalizedvertex as shared_googleclouddatalabelingv1beta1normalizedvertex


@dataclass_json
@dataclasses.dataclass
class GoogleCloudDatalabelingV1beta1NormalizedBoundingPoly:
    r"""GoogleCloudDatalabelingV1beta1NormalizedBoundingPoly
    Normalized bounding polygon.
    """
    
    normalized_vertices: Optional[list[shared_googleclouddatalabelingv1beta1normalizedvertex.GoogleCloudDatalabelingV1beta1NormalizedVertex]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('normalizedVertices') }})
    
