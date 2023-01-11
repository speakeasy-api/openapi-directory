import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googleclouddatalabelingv1beta1humanannotationconfig as shared_googleclouddatalabelingv1beta1humanannotationconfig
from ..shared import googleclouddatalabelingv1beta1textclassificationconfig as shared_googleclouddatalabelingv1beta1textclassificationconfig
from ..shared import googleclouddatalabelingv1beta1textentityextractionconfig as shared_googleclouddatalabelingv1beta1textentityextractionconfig

class GoogleCloudDatalabelingV1beta1LabelTextRequestFeatureEnum(str, Enum):
    FEATURE_UNSPECIFIED = "FEATURE_UNSPECIFIED"
    TEXT_CLASSIFICATION = "TEXT_CLASSIFICATION"
    TEXT_ENTITY_EXTRACTION = "TEXT_ENTITY_EXTRACTION"


@dataclass_json
@dataclasses.dataclass
class GoogleCloudDatalabelingV1beta1LabelTextRequest:
    r"""GoogleCloudDatalabelingV1beta1LabelTextRequest
    Request message for LabelText.
    """
    
    basic_config: Optional[shared_googleclouddatalabelingv1beta1humanannotationconfig.GoogleCloudDatalabelingV1beta1HumanAnnotationConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('basicConfig') }})
    feature: Optional[GoogleCloudDatalabelingV1beta1LabelTextRequestFeatureEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('feature') }})
    text_classification_config: Optional[shared_googleclouddatalabelingv1beta1textclassificationconfig.GoogleCloudDatalabelingV1beta1TextClassificationConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('textClassificationConfig') }})
    text_entity_extraction_config: Optional[shared_googleclouddatalabelingv1beta1textentityextractionconfig.GoogleCloudDatalabelingV1beta1TextEntityExtractionConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('textEntityExtractionConfig') }})
    
