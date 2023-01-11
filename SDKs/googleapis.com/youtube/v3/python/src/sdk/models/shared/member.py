import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import membersnippet as shared_membersnippet


@dataclass_json
@dataclasses.dataclass
class Member:
    r"""Member
    A *member* resource represents a member for a YouTube channel. A member provides recurring monetary support to a creator and receives special benefits.
    """
    
    etag: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('etag') }})
    kind: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    snippet: Optional[shared_membersnippet.MemberSnippet] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('snippet') }})
    
