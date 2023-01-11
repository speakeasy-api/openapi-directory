import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googleclouddatalabelingv1beta1sentimentconfig as shared_googleclouddatalabelingv1beta1sentimentconfig


@dataclass_json
@dataclasses.dataclass
class GoogleCloudDatalabelingV1beta1TextClassificationConfig:
    r"""GoogleCloudDatalabelingV1beta1TextClassificationConfig
    Config for text classification human labeling task.
    """
    
    allow_multi_label: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allowMultiLabel') }})
    annotation_spec_set: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('annotationSpecSet') }})
    sentiment_config: Optional[shared_googleclouddatalabelingv1beta1sentimentconfig.GoogleCloudDatalabelingV1beta1SentimentConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sentimentConfig') }})
    
