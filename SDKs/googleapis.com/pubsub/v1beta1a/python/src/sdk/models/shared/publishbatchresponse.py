import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class PublishBatchResponse:
    r"""PublishBatchResponse
    Response for the PublishBatch method.
    """
    
    message_ids: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('messageIds') }})
    
