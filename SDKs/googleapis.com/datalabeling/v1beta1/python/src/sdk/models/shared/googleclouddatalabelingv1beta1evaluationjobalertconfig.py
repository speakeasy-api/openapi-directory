import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class GoogleCloudDatalabelingV1beta1EvaluationJobAlertConfig:
    r"""GoogleCloudDatalabelingV1beta1EvaluationJobAlertConfig
    Provides details for how an evaluation job sends email alerts based on the results of a run.
    """
    
    email: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('email') }})
    min_acceptable_mean_average_precision: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('minAcceptableMeanAveragePrecision') }})
    
