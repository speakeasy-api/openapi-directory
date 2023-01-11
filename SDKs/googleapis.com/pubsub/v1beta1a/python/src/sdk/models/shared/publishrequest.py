import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import pubsubmessage as shared_pubsubmessage


@dataclass_json
@dataclasses.dataclass
class PublishRequest:
    r"""PublishRequest
    Request for the Publish method.
    """
    
    message: Optional[shared_pubsubmessage.PubsubMessage] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    topic: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('topic') }})
    
