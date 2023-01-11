import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class LiveStreamContentDetails:
    r"""LiveStreamContentDetails
    Detailed settings of a stream.
    """
    
    closed_captions_ingestion_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('closedCaptionsIngestionUrl') }})
    is_reusable: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isReusable') }})
    
