import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googleclouddatalabelingv1beta1bigquerysource as shared_googleclouddatalabelingv1beta1bigquerysource
from ..shared import googleclouddatalabelingv1beta1classificationmetadata as shared_googleclouddatalabelingv1beta1classificationmetadata
from ..shared import googleclouddatalabelingv1beta1gcssource as shared_googleclouddatalabelingv1beta1gcssource
from ..shared import googleclouddatalabelingv1beta1textmetadata as shared_googleclouddatalabelingv1beta1textmetadata

class GoogleCloudDatalabelingV1beta1InputConfigAnnotationTypeEnum(str, Enum):
    ANNOTATION_TYPE_UNSPECIFIED = "ANNOTATION_TYPE_UNSPECIFIED"
    IMAGE_CLASSIFICATION_ANNOTATION = "IMAGE_CLASSIFICATION_ANNOTATION"
    IMAGE_BOUNDING_BOX_ANNOTATION = "IMAGE_BOUNDING_BOX_ANNOTATION"
    IMAGE_ORIENTED_BOUNDING_BOX_ANNOTATION = "IMAGE_ORIENTED_BOUNDING_BOX_ANNOTATION"
    IMAGE_BOUNDING_POLY_ANNOTATION = "IMAGE_BOUNDING_POLY_ANNOTATION"
    IMAGE_POLYLINE_ANNOTATION = "IMAGE_POLYLINE_ANNOTATION"
    IMAGE_SEGMENTATION_ANNOTATION = "IMAGE_SEGMENTATION_ANNOTATION"
    VIDEO_SHOTS_CLASSIFICATION_ANNOTATION = "VIDEO_SHOTS_CLASSIFICATION_ANNOTATION"
    VIDEO_OBJECT_TRACKING_ANNOTATION = "VIDEO_OBJECT_TRACKING_ANNOTATION"
    VIDEO_OBJECT_DETECTION_ANNOTATION = "VIDEO_OBJECT_DETECTION_ANNOTATION"
    VIDEO_EVENT_ANNOTATION = "VIDEO_EVENT_ANNOTATION"
    TEXT_CLASSIFICATION_ANNOTATION = "TEXT_CLASSIFICATION_ANNOTATION"
    TEXT_ENTITY_EXTRACTION_ANNOTATION = "TEXT_ENTITY_EXTRACTION_ANNOTATION"
    GENERAL_CLASSIFICATION_ANNOTATION = "GENERAL_CLASSIFICATION_ANNOTATION"

class GoogleCloudDatalabelingV1beta1InputConfigDataTypeEnum(str, Enum):
    DATA_TYPE_UNSPECIFIED = "DATA_TYPE_UNSPECIFIED"
    IMAGE = "IMAGE"
    VIDEO = "VIDEO"
    TEXT = "TEXT"
    GENERAL_DATA = "GENERAL_DATA"


@dataclass_json
@dataclasses.dataclass
class GoogleCloudDatalabelingV1beta1InputConfig:
    r"""GoogleCloudDatalabelingV1beta1InputConfig
    The configuration of input data, including data type, location, etc.
    """
    
    annotation_type: Optional[GoogleCloudDatalabelingV1beta1InputConfigAnnotationTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('annotationType') }})
    bigquery_source: Optional[shared_googleclouddatalabelingv1beta1bigquerysource.GoogleCloudDatalabelingV1beta1BigQuerySource] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bigquerySource') }})
    classification_metadata: Optional[shared_googleclouddatalabelingv1beta1classificationmetadata.GoogleCloudDatalabelingV1beta1ClassificationMetadata] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('classificationMetadata') }})
    data_type: Optional[GoogleCloudDatalabelingV1beta1InputConfigDataTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataType') }})
    gcs_source: Optional[shared_googleclouddatalabelingv1beta1gcssource.GoogleCloudDatalabelingV1beta1GcsSource] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gcsSource') }})
    text_metadata: Optional[shared_googleclouddatalabelingv1beta1textmetadata.GoogleCloudDatalabelingV1beta1TextMetadata] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('textMetadata') }})
    
