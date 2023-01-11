import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import thirdpartylinksnippet as shared_thirdpartylinksnippet
from ..shared import thirdpartylinkstatus as shared_thirdpartylinkstatus


@dataclass_json
@dataclasses.dataclass
class ThirdPartyLink:
    r"""ThirdPartyLink
    A *third party account link* resource represents a link between a YouTube account or a channel and an account on a third-party service.
    """
    
    etag: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('etag') }})
    kind: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    linking_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('linkingToken') }})
    snippet: Optional[shared_thirdpartylinksnippet.ThirdPartyLinkSnippet] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('snippet') }})
    status: Optional[shared_thirdpartylinkstatus.ThirdPartyLinkStatus] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    
