import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import filereference as shared_filereference


@dataclass_json
@dataclasses.dataclass
class Apk:
    r"""Apk
    An Android package file to install.
    """
    
    location: Optional[shared_filereference.FileReference] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('location') }})
    package_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('packageName') }})
    
