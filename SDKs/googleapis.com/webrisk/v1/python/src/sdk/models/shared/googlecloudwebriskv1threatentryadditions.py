import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googlecloudwebriskv1rawhashes as shared_googlecloudwebriskv1rawhashes
from ..shared import googlecloudwebriskv1ricedeltaencoding as shared_googlecloudwebriskv1ricedeltaencoding


@dataclass_json
@dataclasses.dataclass
class GoogleCloudWebriskV1ThreatEntryAdditions:
    r"""GoogleCloudWebriskV1ThreatEntryAdditions
    Contains the set of entries to add to a local database. May contain a combination of compressed and raw data in a single response.
    """
    
    raw_hashes: Optional[list[shared_googlecloudwebriskv1rawhashes.GoogleCloudWebriskV1RawHashes]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rawHashes') }})
    rice_hashes: Optional[shared_googlecloudwebriskv1ricedeltaencoding.GoogleCloudWebriskV1RiceDeltaEncoding] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('riceHashes') }})
    
