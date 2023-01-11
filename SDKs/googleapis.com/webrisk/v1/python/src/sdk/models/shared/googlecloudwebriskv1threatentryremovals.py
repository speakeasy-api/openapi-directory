import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googlecloudwebriskv1rawindices as shared_googlecloudwebriskv1rawindices
from ..shared import googlecloudwebriskv1ricedeltaencoding as shared_googlecloudwebriskv1ricedeltaencoding


@dataclass_json
@dataclasses.dataclass
class GoogleCloudWebriskV1ThreatEntryRemovals:
    r"""GoogleCloudWebriskV1ThreatEntryRemovals
    Contains the set of entries to remove from a local database.
    """
    
    raw_indices: Optional[shared_googlecloudwebriskv1rawindices.GoogleCloudWebriskV1RawIndices] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rawIndices') }})
    rice_indices: Optional[shared_googlecloudwebriskv1ricedeltaencoding.GoogleCloudWebriskV1RiceDeltaEncoding] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('riceIndices') }})
    
