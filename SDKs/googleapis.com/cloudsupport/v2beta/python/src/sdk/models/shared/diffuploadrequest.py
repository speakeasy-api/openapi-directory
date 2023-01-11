import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import compositemedia as shared_compositemedia


@dataclass_json
@dataclasses.dataclass
class DiffUploadRequest:
    r"""DiffUploadRequest
    # gdata.* are outside protos with mising documentation
    """
    
    checksums_info: Optional[shared_compositemedia.CompositeMedia] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('checksumsInfo') }})
    object_info: Optional[shared_compositemedia.CompositeMedia] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('objectInfo') }})
    object_version: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('objectVersion') }})
    
