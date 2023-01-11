import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googlecloudwebriskv1threatentryadditions as shared_googlecloudwebriskv1threatentryadditions
from ..shared import googlecloudwebriskv1computethreatlistdiffresponsechecksum as shared_googlecloudwebriskv1computethreatlistdiffresponsechecksum
from ..shared import googlecloudwebriskv1threatentryremovals as shared_googlecloudwebriskv1threatentryremovals

class GoogleCloudWebriskV1ComputeThreatListDiffResponseResponseTypeEnum(str, Enum):
    RESPONSE_TYPE_UNSPECIFIED = "RESPONSE_TYPE_UNSPECIFIED"
    DIFF = "DIFF"
    RESET = "RESET"


@dataclass_json
@dataclasses.dataclass
class GoogleCloudWebriskV1ComputeThreatListDiffResponse:
    additions: Optional[shared_googlecloudwebriskv1threatentryadditions.GoogleCloudWebriskV1ThreatEntryAdditions] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('additions') }})
    checksum: Optional[shared_googlecloudwebriskv1computethreatlistdiffresponsechecksum.GoogleCloudWebriskV1ComputeThreatListDiffResponseChecksum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('checksum') }})
    new_version_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('newVersionToken') }})
    recommended_next_diff: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('recommendedNextDiff') }})
    removals: Optional[shared_googlecloudwebriskv1threatentryremovals.GoogleCloudWebriskV1ThreatEntryRemovals] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('removals') }})
    response_type: Optional[GoogleCloudWebriskV1ComputeThreatListDiffResponseResponseTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('responseType') }})
    
