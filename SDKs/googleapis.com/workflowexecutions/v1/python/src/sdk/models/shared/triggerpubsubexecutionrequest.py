import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import pubsubmessage as shared_pubsubmessage


@dataclass_json
@dataclasses.dataclass
class TriggerPubsubExecutionRequest:
    r"""TriggerPubsubExecutionRequest
    Request for the TriggerPubsubExecution method.
    """
    
    gcp_cloud_events_mode: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('GCPCloudEventsMode') }})
    message: Optional[shared_pubsubmessage.PubsubMessage] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    subscription: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subscription') }})
    
