import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import gdatacompositemedia as shared_gdatacompositemedia


@dataclass_json
@dataclasses.dataclass
class GdataDiffUploadRequest:
    r"""GdataDiffUploadRequest
    gdata
    """
    
    checksums_info: Optional[shared_gdatacompositemedia.GdataCompositeMedia] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('checksumsInfo') }})
    object_info: Optional[shared_gdatacompositemedia.GdataCompositeMedia] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('objectInfo') }})
    object_version: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('objectVersion') }})
    
