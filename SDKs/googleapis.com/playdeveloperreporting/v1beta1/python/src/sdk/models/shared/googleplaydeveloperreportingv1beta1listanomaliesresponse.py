import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googleplaydeveloperreportingv1beta1anomaly as shared_googleplaydeveloperreportingv1beta1anomaly


@dataclass_json
@dataclasses.dataclass
class GooglePlayDeveloperReportingV1beta1ListAnomaliesResponse:
    r"""GooglePlayDeveloperReportingV1beta1ListAnomaliesResponse
    Response with a list of anomalies in datasets.
    """
    
    anomalies: Optional[list[shared_googleplaydeveloperreportingv1beta1anomaly.GooglePlayDeveloperReportingV1beta1Anomaly]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('anomalies') }})
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
