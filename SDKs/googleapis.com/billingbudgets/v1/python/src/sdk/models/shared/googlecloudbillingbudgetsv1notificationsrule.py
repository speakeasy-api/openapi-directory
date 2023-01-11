import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class GoogleCloudBillingBudgetsV1NotificationsRule:
    r"""GoogleCloudBillingBudgetsV1NotificationsRule
    NotificationsRule defines notifications that are sent based on budget spend and thresholds.
    """
    
    disable_default_iam_recipients: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('disableDefaultIamRecipients') }})
    monitoring_notification_channels: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('monitoringNotificationChannels') }})
    pubsub_topic: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pubsubTopic') }})
    schema_version: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('schemaVersion') }})
    
