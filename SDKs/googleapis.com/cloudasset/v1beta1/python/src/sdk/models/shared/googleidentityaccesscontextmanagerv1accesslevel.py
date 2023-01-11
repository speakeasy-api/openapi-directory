import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googleidentityaccesscontextmanagerv1basiclevel as shared_googleidentityaccesscontextmanagerv1basiclevel
from ..shared import googleidentityaccesscontextmanagerv1customlevel as shared_googleidentityaccesscontextmanagerv1customlevel


@dataclass_json
@dataclasses.dataclass
class GoogleIdentityAccesscontextmanagerV1AccessLevel:
    r"""GoogleIdentityAccesscontextmanagerV1AccessLevel
    An `AccessLevel` is a label that can be applied to requests to Google Cloud services, along with a list of requirements necessary for the label to be applied.
    """
    
    basic: Optional[shared_googleidentityaccesscontextmanagerv1basiclevel.GoogleIdentityAccesscontextmanagerV1BasicLevel] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('basic') }})
    custom: Optional[shared_googleidentityaccesscontextmanagerv1customlevel.GoogleIdentityAccesscontextmanagerV1CustomLevel] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('custom') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    title: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    
