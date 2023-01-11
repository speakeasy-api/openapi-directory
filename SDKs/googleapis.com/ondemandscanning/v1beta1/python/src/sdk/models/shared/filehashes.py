import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import hash as shared_hash


@dataclass_json
@dataclasses.dataclass
class FileHashes:
    file_hash: Optional[list[shared_hash.Hash]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fileHash') }})
    
