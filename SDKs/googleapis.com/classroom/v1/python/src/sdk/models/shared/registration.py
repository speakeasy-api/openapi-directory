import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import cloudpubsubtopic as shared_cloudpubsubtopic
from ..shared import feed as shared_feed


@dataclass_json
@dataclasses.dataclass
class Registration:
    r"""Registration
    An instruction to Classroom to send notifications from the `feed` to the provided destination.
    """
    
    cloud_pubsub_topic: Optional[shared_cloudpubsubtopic.CloudPubsubTopic] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cloudPubsubTopic') }})
    expiry_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('expiryTime') }})
    feed: Optional[shared_feed.Feed] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('feed') }})
    registration_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('registrationId') }})
    
