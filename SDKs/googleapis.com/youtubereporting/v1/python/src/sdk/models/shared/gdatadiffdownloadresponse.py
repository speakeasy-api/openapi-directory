import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import gdatacompositemedia as shared_gdatacompositemedia


@dataclass_json
@dataclasses.dataclass
class GdataDiffDownloadResponse:
    r"""GdataDiffDownloadResponse
    gdata
    """
    
    object_location: Optional[shared_gdatacompositemedia.GdataCompositeMedia] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('objectLocation') }})
    
