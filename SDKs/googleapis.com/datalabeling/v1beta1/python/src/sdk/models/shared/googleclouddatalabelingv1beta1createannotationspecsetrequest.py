import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googleclouddatalabelingv1beta1annotationspecset as shared_googleclouddatalabelingv1beta1annotationspecset


@dataclass_json
@dataclasses.dataclass
class GoogleCloudDatalabelingV1beta1CreateAnnotationSpecSetRequest:
    r"""GoogleCloudDatalabelingV1beta1CreateAnnotationSpecSetRequest
    Request message for CreateAnnotationSpecSet.
    """
    
    annotation_spec_set: Optional[shared_googleclouddatalabelingv1beta1annotationspecset.GoogleCloudDatalabelingV1beta1AnnotationSpecSet] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('annotationSpecSet') }})
    
