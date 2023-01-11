import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import iampolicy as shared_iampolicy


@dataclass_json
@dataclasses.dataclass
class Namespace:
    r"""Namespace
    Represents the information of a namespace
    """
    
    iam_policy: Optional[shared_iampolicy.IamPolicy] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('iamPolicy') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    
