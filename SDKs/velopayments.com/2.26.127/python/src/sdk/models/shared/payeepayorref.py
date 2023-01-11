import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import invitationstatus_enum as shared_invitationstatus_enum
from ..shared import payableissue_2 as shared_payableissue_2


@dataclass_json
@dataclasses.dataclass
class PayeePayorRef:
    invitation_status: Optional[shared_invitationstatus_enum.InvitationStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('invitationStatus') }})
    invitation_status_timestamp: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('invitationStatusTimestamp'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    payable_issues: Optional[list[shared_payableissue_2.PayableIssue2]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('payableIssues') }})
    payable_status: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('payableStatus') }})
    payment_channel_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('paymentChannelId') }})
    payor_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('payorId') }})
    remote_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('remoteId') }})
    
