import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import dynamiclinkinfo as shared_dynamiclinkinfo
from ..shared import suffix as shared_suffix


@dataclass_json
@dataclasses.dataclass
class CreateManagedShortLinkRequest:
    r"""CreateManagedShortLinkRequest
    Request to create a managed Short Dynamic Link.
    """
    
    dynamic_link_info: Optional[shared_dynamiclinkinfo.DynamicLinkInfo] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dynamicLinkInfo') }})
    long_dynamic_link: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('longDynamicLink') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    sdk_version: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sdkVersion') }})
    suffix: Optional[shared_suffix.Suffix] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('suffix') }})
    
