import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class GoogleCloudBillingBudgetsV1beta1AllUpdatesRule:
    r"""GoogleCloudBillingBudgetsV1beta1AllUpdatesRule
    AllUpdatesRule defines notifications that are sent based on budget spend and thresholds.
    """
    
    disable_default_iam_recipients: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('disableDefaultIamRecipients') }})
    monitoring_notification_channels: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('monitoringNotificationChannels') }})
    pubsub_topic: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pubsubTopic') }})
    schema_version: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('schemaVersion') }})
    
