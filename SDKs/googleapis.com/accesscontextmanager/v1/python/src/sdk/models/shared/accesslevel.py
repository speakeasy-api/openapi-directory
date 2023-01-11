import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import basiclevel as shared_basiclevel
from ..shared import customlevel as shared_customlevel


@dataclass_json
@dataclasses.dataclass
class AccessLevel:
    r"""AccessLevel
    An `AccessLevel` is a label that can be applied to requests to Google Cloud services, along with a list of requirements necessary for the label to be applied.
    """
    
    basic: Optional[shared_basiclevel.BasicLevel] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('basic') }})
    custom: Optional[shared_customlevel.CustomLevel] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('custom') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    title: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    
