import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import packagestatusenum_enum as shared_packagestatusenum_enum


@dataclass_json
@dataclasses.dataclass
class Package:
    key: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    status: Optional[shared_packagestatusenum_enum.PackageStatusEnumEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    
