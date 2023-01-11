import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googleclouddatalabelingv1beta1annotationspec as shared_googleclouddatalabelingv1beta1annotationspec
from ..shared import googleclouddatalabelingv1beta1normalizedpolyline as shared_googleclouddatalabelingv1beta1normalizedpolyline
from ..shared import googleclouddatalabelingv1beta1polyline as shared_googleclouddatalabelingv1beta1polyline


@dataclass_json
@dataclasses.dataclass
class GoogleCloudDatalabelingV1beta1ImagePolylineAnnotation:
    r"""GoogleCloudDatalabelingV1beta1ImagePolylineAnnotation
    A polyline for the image annotation.
    """
    
    annotation_spec: Optional[shared_googleclouddatalabelingv1beta1annotationspec.GoogleCloudDatalabelingV1beta1AnnotationSpec] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('annotationSpec') }})
    normalized_polyline: Optional[shared_googleclouddatalabelingv1beta1normalizedpolyline.GoogleCloudDatalabelingV1beta1NormalizedPolyline] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('normalizedPolyline') }})
    polyline: Optional[shared_googleclouddatalabelingv1beta1polyline.GoogleCloudDatalabelingV1beta1Polyline] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('polyline') }})
    
