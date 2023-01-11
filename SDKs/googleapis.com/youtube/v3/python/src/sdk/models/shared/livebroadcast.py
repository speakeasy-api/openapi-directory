import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import livebroadcastcontentdetails as shared_livebroadcastcontentdetails
from ..shared import livebroadcastsnippet as shared_livebroadcastsnippet
from ..shared import livebroadcaststatistics as shared_livebroadcaststatistics
from ..shared import livebroadcaststatus as shared_livebroadcaststatus


@dataclass_json
@dataclasses.dataclass
class LiveBroadcast:
    r"""LiveBroadcast
    A *liveBroadcast* resource represents an event that will be streamed, via live video, on YouTube.
    """
    
    content_details: Optional[shared_livebroadcastcontentdetails.LiveBroadcastContentDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contentDetails') }})
    etag: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('etag') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    kind: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    snippet: Optional[shared_livebroadcastsnippet.LiveBroadcastSnippet] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('snippet') }})
    statistics: Optional[shared_livebroadcaststatistics.LiveBroadcastStatistics] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('statistics') }})
    status: Optional[shared_livebroadcaststatus.LiveBroadcastStatus] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    
