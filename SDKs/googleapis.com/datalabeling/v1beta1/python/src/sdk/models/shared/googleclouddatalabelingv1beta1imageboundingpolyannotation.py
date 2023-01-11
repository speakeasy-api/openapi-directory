import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googleclouddatalabelingv1beta1annotationspec as shared_googleclouddatalabelingv1beta1annotationspec
from ..shared import googleclouddatalabelingv1beta1boundingpoly as shared_googleclouddatalabelingv1beta1boundingpoly
from ..shared import googleclouddatalabelingv1beta1normalizedboundingpoly as shared_googleclouddatalabelingv1beta1normalizedboundingpoly


@dataclass_json
@dataclasses.dataclass
class GoogleCloudDatalabelingV1beta1ImageBoundingPolyAnnotation:
    r"""GoogleCloudDatalabelingV1beta1ImageBoundingPolyAnnotation
    Image bounding poly annotation. It represents a polygon including bounding box in the image.
    """
    
    annotation_spec: Optional[shared_googleclouddatalabelingv1beta1annotationspec.GoogleCloudDatalabelingV1beta1AnnotationSpec] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('annotationSpec') }})
    bounding_poly: Optional[shared_googleclouddatalabelingv1beta1boundingpoly.GoogleCloudDatalabelingV1beta1BoundingPoly] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('boundingPoly') }})
    normalized_bounding_poly: Optional[shared_googleclouddatalabelingv1beta1normalizedboundingpoly.GoogleCloudDatalabelingV1beta1NormalizedBoundingPoly] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('normalizedBoundingPoly') }})
    
