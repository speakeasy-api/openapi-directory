import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googleclouddatalabelingv1beta1annotationspec as shared_googleclouddatalabelingv1beta1annotationspec
from ..shared import googleclouddatalabelingv1beta1confidencemetricsentry as shared_googleclouddatalabelingv1beta1confidencemetricsentry


@dataclass_json
@dataclasses.dataclass
class GoogleCloudDatalabelingV1beta1PrCurve:
    annotation_spec: Optional[shared_googleclouddatalabelingv1beta1annotationspec.GoogleCloudDatalabelingV1beta1AnnotationSpec] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('annotationSpec') }})
    area_under_curve: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('areaUnderCurve') }})
    confidence_metrics_entries: Optional[list[shared_googleclouddatalabelingv1beta1confidencemetricsentry.GoogleCloudDatalabelingV1beta1ConfidenceMetricsEntry]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('confidenceMetricsEntries') }})
    mean_average_precision: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meanAveragePrecision') }})
    
