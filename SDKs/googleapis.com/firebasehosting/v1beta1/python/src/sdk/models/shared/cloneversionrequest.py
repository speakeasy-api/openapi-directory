import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import pathfilter as shared_pathfilter


@dataclass_json
@dataclasses.dataclass
class CloneVersionRequest:
    exclude: Optional[shared_pathfilter.PathFilter] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('exclude') }})
    finalize: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('finalize') }})
    include: Optional[shared_pathfilter.PathFilter] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('include') }})
    source_version: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sourceVersion') }})
    
