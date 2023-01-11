import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googleclouddatalabelingv1beta1vertex as shared_googleclouddatalabelingv1beta1vertex


@dataclass_json
@dataclasses.dataclass
class GoogleCloudDatalabelingV1beta1Polyline:
    r"""GoogleCloudDatalabelingV1beta1Polyline
    A line with multiple line segments.
    """
    
    vertices: Optional[list[shared_googleclouddatalabelingv1beta1vertex.GoogleCloudDatalabelingV1beta1Vertex]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vertices') }})
    
