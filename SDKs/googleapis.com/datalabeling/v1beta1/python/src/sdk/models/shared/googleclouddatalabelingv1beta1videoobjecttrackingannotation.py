import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googleclouddatalabelingv1beta1annotationspec as shared_googleclouddatalabelingv1beta1annotationspec
from ..shared import googleclouddatalabelingv1beta1objecttrackingframe as shared_googleclouddatalabelingv1beta1objecttrackingframe
from ..shared import googleclouddatalabelingv1beta1timesegment as shared_googleclouddatalabelingv1beta1timesegment


@dataclass_json
@dataclasses.dataclass
class GoogleCloudDatalabelingV1beta1VideoObjectTrackingAnnotation:
    r"""GoogleCloudDatalabelingV1beta1VideoObjectTrackingAnnotation
    Video object tracking annotation.
    """
    
    annotation_spec: Optional[shared_googleclouddatalabelingv1beta1annotationspec.GoogleCloudDatalabelingV1beta1AnnotationSpec] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('annotationSpec') }})
    object_tracking_frames: Optional[list[shared_googleclouddatalabelingv1beta1objecttrackingframe.GoogleCloudDatalabelingV1beta1ObjectTrackingFrame]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('objectTrackingFrames') }})
    time_segment: Optional[shared_googleclouddatalabelingv1beta1timesegment.GoogleCloudDatalabelingV1beta1TimeSegment] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timeSegment') }})
    
