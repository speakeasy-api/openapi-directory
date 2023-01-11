import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googleclouddatalabelingv1beta1boundingpolyconfig as shared_googleclouddatalabelingv1beta1boundingpolyconfig
from ..shared import googleclouddatalabelingv1beta1eventconfig as shared_googleclouddatalabelingv1beta1eventconfig
from ..shared import googleclouddatalabelingv1beta1humanannotationconfig as shared_googleclouddatalabelingv1beta1humanannotationconfig
from ..shared import googleclouddatalabelingv1beta1imageclassificationconfig as shared_googleclouddatalabelingv1beta1imageclassificationconfig
from ..shared import googleclouddatalabelingv1beta1objectdetectionconfig as shared_googleclouddatalabelingv1beta1objectdetectionconfig
from ..shared import googleclouddatalabelingv1beta1objecttrackingconfig as shared_googleclouddatalabelingv1beta1objecttrackingconfig
from ..shared import googleclouddatalabelingv1beta1polylineconfig as shared_googleclouddatalabelingv1beta1polylineconfig
from ..shared import googleclouddatalabelingv1beta1segmentationconfig as shared_googleclouddatalabelingv1beta1segmentationconfig
from ..shared import googleclouddatalabelingv1beta1textclassificationconfig as shared_googleclouddatalabelingv1beta1textclassificationconfig
from ..shared import googleclouddatalabelingv1beta1textentityextractionconfig as shared_googleclouddatalabelingv1beta1textentityextractionconfig
from ..shared import googleclouddatalabelingv1beta1videoclassificationconfig as shared_googleclouddatalabelingv1beta1videoclassificationconfig


@dataclass_json
@dataclasses.dataclass
class GoogleCloudDatalabelingV1beta1AnnotatedDatasetMetadata:
    r"""GoogleCloudDatalabelingV1beta1AnnotatedDatasetMetadata
    Metadata on AnnotatedDataset.
    """
    
    bounding_poly_config: Optional[shared_googleclouddatalabelingv1beta1boundingpolyconfig.GoogleCloudDatalabelingV1beta1BoundingPolyConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('boundingPolyConfig') }})
    event_config: Optional[shared_googleclouddatalabelingv1beta1eventconfig.GoogleCloudDatalabelingV1beta1EventConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('eventConfig') }})
    human_annotation_config: Optional[shared_googleclouddatalabelingv1beta1humanannotationconfig.GoogleCloudDatalabelingV1beta1HumanAnnotationConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('humanAnnotationConfig') }})
    image_classification_config: Optional[shared_googleclouddatalabelingv1beta1imageclassificationconfig.GoogleCloudDatalabelingV1beta1ImageClassificationConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('imageClassificationConfig') }})
    object_detection_config: Optional[shared_googleclouddatalabelingv1beta1objectdetectionconfig.GoogleCloudDatalabelingV1beta1ObjectDetectionConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('objectDetectionConfig') }})
    object_tracking_config: Optional[shared_googleclouddatalabelingv1beta1objecttrackingconfig.GoogleCloudDatalabelingV1beta1ObjectTrackingConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('objectTrackingConfig') }})
    polyline_config: Optional[shared_googleclouddatalabelingv1beta1polylineconfig.GoogleCloudDatalabelingV1beta1PolylineConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('polylineConfig') }})
    segmentation_config: Optional[shared_googleclouddatalabelingv1beta1segmentationconfig.GoogleCloudDatalabelingV1beta1SegmentationConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('segmentationConfig') }})
    text_classification_config: Optional[shared_googleclouddatalabelingv1beta1textclassificationconfig.GoogleCloudDatalabelingV1beta1TextClassificationConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('textClassificationConfig') }})
    text_entity_extraction_config: Optional[shared_googleclouddatalabelingv1beta1textentityextractionconfig.GoogleCloudDatalabelingV1beta1TextEntityExtractionConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('textEntityExtractionConfig') }})
    video_classification_config: Optional[shared_googleclouddatalabelingv1beta1videoclassificationconfig.GoogleCloudDatalabelingV1beta1VideoClassificationConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('videoClassificationConfig') }})
    
