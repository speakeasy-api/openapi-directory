import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import channelsectioncontentdetails as shared_channelsectioncontentdetails
from ..shared import channelsectionlocalization as shared_channelsectionlocalization
from ..shared import channelsectionsnippet as shared_channelsectionsnippet
from ..shared import channelsectiontargeting as shared_channelsectiontargeting


@dataclass_json
@dataclasses.dataclass
class ChannelSection:
    content_details: Optional[shared_channelsectioncontentdetails.ChannelSectionContentDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contentDetails') }})
    etag: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('etag') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    kind: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    localizations: Optional[dict[str, shared_channelsectionlocalization.ChannelSectionLocalization]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('localizations') }})
    snippet: Optional[shared_channelsectionsnippet.ChannelSectionSnippet] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('snippet') }})
    targeting: Optional[shared_channelsectiontargeting.ChannelSectionTargeting] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('targeting') }})
    
