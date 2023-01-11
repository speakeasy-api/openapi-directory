import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import ospolicyresourcefilegcs as shared_ospolicyresourcefilegcs
from ..shared import ospolicyresourcefileremote as shared_ospolicyresourcefileremote


@dataclass_json
@dataclasses.dataclass
class OsPolicyResourceFile:
    r"""OsPolicyResourceFile
    A remote or local file.
    """
    
    allow_insecure: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allowInsecure') }})
    gcs: Optional[shared_ospolicyresourcefilegcs.OsPolicyResourceFileGcs] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gcs') }})
    local_path: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('localPath') }})
    remote: Optional[shared_ospolicyresourcefileremote.OsPolicyResourceFileRemote] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('remote') }})
    
