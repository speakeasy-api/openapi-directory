import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googleclouddatalabelingv1beta1annotationspec as shared_googleclouddatalabelingv1beta1annotationspec


@dataclass_json
@dataclasses.dataclass
class GoogleCloudDatalabelingV1beta1ImageSegmentationAnnotation:
    r"""GoogleCloudDatalabelingV1beta1ImageSegmentationAnnotation
    Image segmentation annotation.
    """
    
    annotation_colors: Optional[dict[str, shared_googleclouddatalabelingv1beta1annotationspec.GoogleCloudDatalabelingV1beta1AnnotationSpec]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('annotationColors') }})
    image_bytes: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('imageBytes') }})
    mime_type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mimeType') }})
    
