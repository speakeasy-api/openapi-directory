import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import compositemedia as shared_compositemedia


@dataclass_json
@dataclasses.dataclass
class DiffUploadResponse:
    r"""DiffUploadResponse
    # gdata.* are outside protos with mising documentation
    """
    
    object_version: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('objectVersion') }})
    original_object: Optional[shared_compositemedia.CompositeMedia] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('originalObject') }})
    
