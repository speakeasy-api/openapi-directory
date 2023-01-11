import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import compositemedia as shared_compositemedia


@dataclass_json
@dataclasses.dataclass
class DiffDownloadResponse:
    r"""DiffDownloadResponse
    # gdata.* are outside protos with mising documentation
    """
    
    object_location: Optional[shared_compositemedia.CompositeMedia] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('objectLocation') }})
    
