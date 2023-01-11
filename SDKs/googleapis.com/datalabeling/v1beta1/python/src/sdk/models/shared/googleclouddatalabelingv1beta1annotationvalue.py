import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googleclouddatalabelingv1beta1imageboundingpolyannotation as shared_googleclouddatalabelingv1beta1imageboundingpolyannotation
from ..shared import googleclouddatalabelingv1beta1imageclassificationannotation as shared_googleclouddatalabelingv1beta1imageclassificationannotation
from ..shared import googleclouddatalabelingv1beta1imagepolylineannotation as shared_googleclouddatalabelingv1beta1imagepolylineannotation
from ..shared import googleclouddatalabelingv1beta1imagesegmentationannotation as shared_googleclouddatalabelingv1beta1imagesegmentationannotation
from ..shared import googleclouddatalabelingv1beta1textclassificationannotation as shared_googleclouddatalabelingv1beta1textclassificationannotation
from ..shared import googleclouddatalabelingv1beta1textentityextractionannotation as shared_googleclouddatalabelingv1beta1textentityextractionannotation
from ..shared import googleclouddatalabelingv1beta1videoclassificationannotation as shared_googleclouddatalabelingv1beta1videoclassificationannotation
from ..shared import googleclouddatalabelingv1beta1videoeventannotation as shared_googleclouddatalabelingv1beta1videoeventannotation
from ..shared import googleclouddatalabelingv1beta1videoobjecttrackingannotation as shared_googleclouddatalabelingv1beta1videoobjecttrackingannotation


@dataclass_json
@dataclasses.dataclass
class GoogleCloudDatalabelingV1beta1AnnotationValue:
    r"""GoogleCloudDatalabelingV1beta1AnnotationValue
    Annotation value for an example.
    """
    
    image_bounding_poly_annotation: Optional[shared_googleclouddatalabelingv1beta1imageboundingpolyannotation.GoogleCloudDatalabelingV1beta1ImageBoundingPolyAnnotation] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('imageBoundingPolyAnnotation') }})
    image_classification_annotation: Optional[shared_googleclouddatalabelingv1beta1imageclassificationannotation.GoogleCloudDatalabelingV1beta1ImageClassificationAnnotation] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('imageClassificationAnnotation') }})
    image_polyline_annotation: Optional[shared_googleclouddatalabelingv1beta1imagepolylineannotation.GoogleCloudDatalabelingV1beta1ImagePolylineAnnotation] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('imagePolylineAnnotation') }})
    image_segmentation_annotation: Optional[shared_googleclouddatalabelingv1beta1imagesegmentationannotation.GoogleCloudDatalabelingV1beta1ImageSegmentationAnnotation] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('imageSegmentationAnnotation') }})
    text_classification_annotation: Optional[shared_googleclouddatalabelingv1beta1textclassificationannotation.GoogleCloudDatalabelingV1beta1TextClassificationAnnotation] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('textClassificationAnnotation') }})
    text_entity_extraction_annotation: Optional[shared_googleclouddatalabelingv1beta1textentityextractionannotation.GoogleCloudDatalabelingV1beta1TextEntityExtractionAnnotation] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('textEntityExtractionAnnotation') }})
    video_classification_annotation: Optional[shared_googleclouddatalabelingv1beta1videoclassificationannotation.GoogleCloudDatalabelingV1beta1VideoClassificationAnnotation] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('videoClassificationAnnotation') }})
    video_event_annotation: Optional[shared_googleclouddatalabelingv1beta1videoeventannotation.GoogleCloudDatalabelingV1beta1VideoEventAnnotation] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('videoEventAnnotation') }})
    video_object_tracking_annotation: Optional[shared_googleclouddatalabelingv1beta1videoobjecttrackingannotation.GoogleCloudDatalabelingV1beta1VideoObjectTrackingAnnotation] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('videoObjectTrackingAnnotation') }})
    
