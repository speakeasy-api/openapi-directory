import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import androidtest as shared_androidtest
from ..shared import iostest as shared_iostest


@dataclass_json
@dataclasses.dataclass
class Specification:
    r"""Specification
    The details about how to run the execution.
    """
    
    android_test: Optional[shared_androidtest.AndroidTest] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('androidTest') }})
    ios_test: Optional[shared_iostest.IosTest] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('iosTest') }})
    
