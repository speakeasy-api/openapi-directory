import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googleclouddatalabelingv1beta1boundingpolyconfig as shared_googleclouddatalabelingv1beta1boundingpolyconfig
from ..shared import googleclouddatalabelingv1beta1evaluationconfig as shared_googleclouddatalabelingv1beta1evaluationconfig
from ..shared import googleclouddatalabelingv1beta1evaluationjobalertconfig as shared_googleclouddatalabelingv1beta1evaluationjobalertconfig
from ..shared import googleclouddatalabelingv1beta1humanannotationconfig as shared_googleclouddatalabelingv1beta1humanannotationconfig
from ..shared import googleclouddatalabelingv1beta1imageclassificationconfig as shared_googleclouddatalabelingv1beta1imageclassificationconfig
from ..shared import googleclouddatalabelingv1beta1inputconfig as shared_googleclouddatalabelingv1beta1inputconfig
from ..shared import googleclouddatalabelingv1beta1textclassificationconfig as shared_googleclouddatalabelingv1beta1textclassificationconfig


@dataclass_json
@dataclasses.dataclass
class GoogleCloudDatalabelingV1beta1EvaluationJobConfig:
    r"""GoogleCloudDatalabelingV1beta1EvaluationJobConfig
    Configures specific details of how a continuous evaluation job works. Provide this configuration when you create an EvaluationJob.
    """
    
    bigquery_import_keys: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bigqueryImportKeys') }})
    bounding_poly_config: Optional[shared_googleclouddatalabelingv1beta1boundingpolyconfig.GoogleCloudDatalabelingV1beta1BoundingPolyConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('boundingPolyConfig') }})
    evaluation_config: Optional[shared_googleclouddatalabelingv1beta1evaluationconfig.GoogleCloudDatalabelingV1beta1EvaluationConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('evaluationConfig') }})
    evaluation_job_alert_config: Optional[shared_googleclouddatalabelingv1beta1evaluationjobalertconfig.GoogleCloudDatalabelingV1beta1EvaluationJobAlertConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('evaluationJobAlertConfig') }})
    example_count: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('exampleCount') }})
    example_sample_percentage: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('exampleSamplePercentage') }})
    human_annotation_config: Optional[shared_googleclouddatalabelingv1beta1humanannotationconfig.GoogleCloudDatalabelingV1beta1HumanAnnotationConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('humanAnnotationConfig') }})
    image_classification_config: Optional[shared_googleclouddatalabelingv1beta1imageclassificationconfig.GoogleCloudDatalabelingV1beta1ImageClassificationConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('imageClassificationConfig') }})
    input_config: Optional[shared_googleclouddatalabelingv1beta1inputconfig.GoogleCloudDatalabelingV1beta1InputConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inputConfig') }})
    text_classification_config: Optional[shared_googleclouddatalabelingv1beta1textclassificationconfig.GoogleCloudDatalabelingV1beta1TextClassificationConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('textClassificationConfig') }})
    
