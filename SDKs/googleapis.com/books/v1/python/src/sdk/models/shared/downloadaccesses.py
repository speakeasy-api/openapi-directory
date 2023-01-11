import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import downloadaccessrestriction as shared_downloadaccessrestriction


@dataclass_json
@dataclasses.dataclass
class DownloadAccesses:
    download_access_list: Optional[list[shared_downloadaccessrestriction.DownloadAccessRestriction]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('downloadAccessList') }})
    kind: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    
