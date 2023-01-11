import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import compositemedia as shared_compositemedia


@dataclass_json
@dataclasses.dataclass
class DiffChecksumsResponse:
    r"""DiffChecksumsResponse
    # gdata.* are outside protos with mising documentation
    """
    
    checksums_location: Optional[shared_compositemedia.CompositeMedia] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('checksumsLocation') }})
    chunk_size_bytes: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('chunkSizeBytes') }})
    object_location: Optional[shared_compositemedia.CompositeMedia] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('objectLocation') }})
    object_size_bytes: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('objectSizeBytes') }})
    object_version: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('objectVersion') }})
    
