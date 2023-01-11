import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import concurrentaccessrestriction as shared_concurrentaccessrestriction
from ..shared import downloadaccessrestriction as shared_downloadaccessrestriction


@dataclass_json
@dataclasses.dataclass
class RequestAccessData:
    concurrent_access: Optional[shared_concurrentaccessrestriction.ConcurrentAccessRestriction] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('concurrentAccess') }})
    download_access: Optional[shared_downloadaccessrestriction.DownloadAccessRestriction] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('downloadAccess') }})
    kind: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    
