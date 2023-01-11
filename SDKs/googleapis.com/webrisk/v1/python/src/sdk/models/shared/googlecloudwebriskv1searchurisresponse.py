import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googlecloudwebriskv1searchurisresponsethreaturi as shared_googlecloudwebriskv1searchurisresponsethreaturi


@dataclass_json
@dataclasses.dataclass
class GoogleCloudWebriskV1SearchUrisResponse:
    threat: Optional[shared_googlecloudwebriskv1searchurisresponsethreaturi.GoogleCloudWebriskV1SearchUrisResponseThreatURI] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('threat') }})
    
