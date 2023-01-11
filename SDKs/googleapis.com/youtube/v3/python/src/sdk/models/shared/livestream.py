import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import cdnsettings as shared_cdnsettings
from ..shared import livestreamcontentdetails as shared_livestreamcontentdetails
from ..shared import livestreamsnippet as shared_livestreamsnippet
from ..shared import livestreamstatus as shared_livestreamstatus


@dataclass_json
@dataclasses.dataclass
class LiveStream:
    r"""LiveStream
    A live stream describes a live ingestion point.
    """
    
    cdn: Optional[shared_cdnsettings.CdnSettings] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cdn') }})
    content_details: Optional[shared_livestreamcontentdetails.LiveStreamContentDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contentDetails') }})
    etag: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('etag') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    kind: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    snippet: Optional[shared_livestreamsnippet.LiveStreamSnippet] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('snippet') }})
    status: Optional[shared_livestreamstatus.LiveStreamStatus] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    
