import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class CloudPubsubTopic:
    r"""CloudPubsubTopic
    A reference to a Cloud Pub/Sub topic. To register for notifications, the owner of the topic must grant `classroom-notifications@system.gserviceaccount.com` the `projects.topics.publish` permission.
    """
    
    topic_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('topicName') }})
    
