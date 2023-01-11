import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googleclouddatalabelingv1beta1annotationspec as shared_googleclouddatalabelingv1beta1annotationspec
from ..shared import googleclouddatalabelingv1beta1sequentialsegment as shared_googleclouddatalabelingv1beta1sequentialsegment


@dataclass_json
@dataclasses.dataclass
class GoogleCloudDatalabelingV1beta1TextEntityExtractionAnnotation:
    r"""GoogleCloudDatalabelingV1beta1TextEntityExtractionAnnotation
    Text entity extraction annotation.
    """
    
    annotation_spec: Optional[shared_googleclouddatalabelingv1beta1annotationspec.GoogleCloudDatalabelingV1beta1AnnotationSpec] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('annotationSpec') }})
    sequential_segment: Optional[shared_googleclouddatalabelingv1beta1sequentialsegment.GoogleCloudDatalabelingV1beta1SequentialSegment] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sequentialSegment') }})
    
