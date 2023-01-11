import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import mutationrecord as shared_mutationrecord

class NotificationChannelVerificationStatusEnum(str, Enum):
    VERIFICATION_STATUS_UNSPECIFIED = "VERIFICATION_STATUS_UNSPECIFIED"
    UNVERIFIED = "UNVERIFIED"
    VERIFIED = "VERIFIED"


@dataclass_json
@dataclasses.dataclass
class NotificationChannel:
    r"""NotificationChannel
    A NotificationChannel is a medium through which an alert is delivered when a policy violation is detected. Examples of channels include email, SMS, and third-party messaging applications. Fields containing sensitive information like authentication tokens or contact info are only partially populated on retrieval.
    """
    
    creation_record: Optional[shared_mutationrecord.MutationRecord] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('creationRecord') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    display_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    enabled: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enabled') }})
    labels: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    mutation_records: Optional[list[shared_mutationrecord.MutationRecord]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mutationRecords') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    user_labels: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userLabels') }})
    verification_status: Optional[NotificationChannelVerificationStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('verificationStatus') }})
    
