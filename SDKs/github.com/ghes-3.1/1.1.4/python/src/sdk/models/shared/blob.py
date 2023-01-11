import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class Blob:
    r"""Blob
    Blob
    """
    
    content: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('content') }})
    encoding: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('encoding') }})
    node_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('node_id') }})
    sha: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('sha') }})
    size: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('size') }})
    url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    highlighted_content: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('highlighted_content') }})
    
