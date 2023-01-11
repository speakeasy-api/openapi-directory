import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googleclouddatalabelingv1beta1annotationspec as shared_googleclouddatalabelingv1beta1annotationspec
from ..shared import googleclouddatalabelingv1beta1timesegment as shared_googleclouddatalabelingv1beta1timesegment


@dataclass_json
@dataclasses.dataclass
class GoogleCloudDatalabelingV1beta1VideoClassificationAnnotation:
    r"""GoogleCloudDatalabelingV1beta1VideoClassificationAnnotation
    Video classification annotation.
    """
    
    annotation_spec: Optional[shared_googleclouddatalabelingv1beta1annotationspec.GoogleCloudDatalabelingV1beta1AnnotationSpec] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('annotationSpec') }})
    time_segment: Optional[shared_googleclouddatalabelingv1beta1timesegment.GoogleCloudDatalabelingV1beta1TimeSegment] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timeSegment') }})
    
