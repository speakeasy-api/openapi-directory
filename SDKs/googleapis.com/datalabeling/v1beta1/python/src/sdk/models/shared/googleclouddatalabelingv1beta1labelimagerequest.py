import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googleclouddatalabelingv1beta1humanannotationconfig as shared_googleclouddatalabelingv1beta1humanannotationconfig
from ..shared import googleclouddatalabelingv1beta1boundingpolyconfig as shared_googleclouddatalabelingv1beta1boundingpolyconfig
from ..shared import googleclouddatalabelingv1beta1imageclassificationconfig as shared_googleclouddatalabelingv1beta1imageclassificationconfig
from ..shared import googleclouddatalabelingv1beta1polylineconfig as shared_googleclouddatalabelingv1beta1polylineconfig
from ..shared import googleclouddatalabelingv1beta1segmentationconfig as shared_googleclouddatalabelingv1beta1segmentationconfig

class GoogleCloudDatalabelingV1beta1LabelImageRequestFeatureEnum(str, Enum):
    FEATURE_UNSPECIFIED = "FEATURE_UNSPECIFIED"
    CLASSIFICATION = "CLASSIFICATION"
    BOUNDING_BOX = "BOUNDING_BOX"
    ORIENTED_BOUNDING_BOX = "ORIENTED_BOUNDING_BOX"
    BOUNDING_POLY = "BOUNDING_POLY"
    POLYLINE = "POLYLINE"
    SEGMENTATION = "SEGMENTATION"


@dataclass_json
@dataclasses.dataclass
class GoogleCloudDatalabelingV1beta1LabelImageRequest:
    r"""GoogleCloudDatalabelingV1beta1LabelImageRequest
    Request message for starting an image labeling task.
    """
    
    basic_config: Optional[shared_googleclouddatalabelingv1beta1humanannotationconfig.GoogleCloudDatalabelingV1beta1HumanAnnotationConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('basicConfig') }})
    bounding_poly_config: Optional[shared_googleclouddatalabelingv1beta1boundingpolyconfig.GoogleCloudDatalabelingV1beta1BoundingPolyConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('boundingPolyConfig') }})
    feature: Optional[GoogleCloudDatalabelingV1beta1LabelImageRequestFeatureEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('feature') }})
    image_classification_config: Optional[shared_googleclouddatalabelingv1beta1imageclassificationconfig.GoogleCloudDatalabelingV1beta1ImageClassificationConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('imageClassificationConfig') }})
    polyline_config: Optional[shared_googleclouddatalabelingv1beta1polylineconfig.GoogleCloudDatalabelingV1beta1PolylineConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('polylineConfig') }})
    segmentation_config: Optional[shared_googleclouddatalabelingv1beta1segmentationconfig.GoogleCloudDatalabelingV1beta1SegmentationConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('segmentationConfig') }})
    
