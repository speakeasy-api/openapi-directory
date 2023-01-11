import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googlecloudwebriskv1searchhashesresponsethreathash as shared_googlecloudwebriskv1searchhashesresponsethreathash


@dataclass_json
@dataclasses.dataclass
class GoogleCloudWebriskV1SearchHashesResponse:
    negative_expire_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('negativeExpireTime') }})
    threats: Optional[list[shared_googlecloudwebriskv1searchhashesresponsethreathash.GoogleCloudWebriskV1SearchHashesResponseThreatHash]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('threats') }})
    
