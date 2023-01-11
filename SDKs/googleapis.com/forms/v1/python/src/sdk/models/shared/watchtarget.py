import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import cloudpubsubtopic as shared_cloudpubsubtopic


@dataclass_json
@dataclasses.dataclass
class WatchTarget:
    r"""WatchTarget
    The target for notification delivery.
    """
    
    topic: Optional[shared_cloudpubsubtopic.CloudPubsubTopic] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('topic') }})
    
