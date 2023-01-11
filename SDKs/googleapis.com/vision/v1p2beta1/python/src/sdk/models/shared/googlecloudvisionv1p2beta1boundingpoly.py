import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googlecloudvisionv1p2beta1normalizedvertex as shared_googlecloudvisionv1p2beta1normalizedvertex
from ..shared import googlecloudvisionv1p2beta1vertex as shared_googlecloudvisionv1p2beta1vertex


@dataclass_json
@dataclasses.dataclass
class GoogleCloudVisionV1p2beta1BoundingPoly:
    r"""GoogleCloudVisionV1p2beta1BoundingPoly
    A bounding polygon for the detected image annotation.
    """
    
    normalized_vertices: Optional[list[shared_googlecloudvisionv1p2beta1normalizedvertex.GoogleCloudVisionV1p2beta1NormalizedVertex]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('normalizedVertices') }})
    vertices: Optional[list[shared_googlecloudvisionv1p2beta1vertex.GoogleCloudVisionV1p2beta1Vertex]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vertices') }})
    
