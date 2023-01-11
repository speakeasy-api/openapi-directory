import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import filterref as shared_filterref
from ..shared import profileref as shared_profileref
from ..shared import filterref as shared_filterref


@dataclass_json
@dataclasses.dataclass
class ProfileFilterLink:
    r"""ProfileFilterLink
    JSON template for an Analytics profile filter link.
    """
    
    filter_ref: Optional[shared_filterref.FilterRef] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('filterRef') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    kind: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    profile_ref: Optional[shared_profileref.ProfileRef] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('profileRef') }})
    rank: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rank') }})
    self_link: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('selfLink') }})
    

@dataclass_json
@dataclasses.dataclass
class ProfileFilterLinkInput:
    r"""ProfileFilterLinkInput
    JSON template for an Analytics profile filter link.
    """
    
    filter_ref: Optional[shared_filterref.FilterRefInput] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('filterRef') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    profile_ref: Optional[shared_profileref.ProfileRef] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('profileRef') }})
    rank: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rank') }})
    
