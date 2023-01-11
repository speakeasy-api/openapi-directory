import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class DiffEntry:
    r"""DiffEntry
    Diff Entry
    """
    
    additions: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('additions') }})
    blob_url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('blob_url') }})
    changes: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('changes') }})
    contents_url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('contents_url') }})
    deletions: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('deletions') }})
    filename: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('filename') }})
    raw_url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('raw_url') }})
    sha: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('sha') }})
    status: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    patch: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('patch') }})
    previous_filename: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous_filename') }})
    
