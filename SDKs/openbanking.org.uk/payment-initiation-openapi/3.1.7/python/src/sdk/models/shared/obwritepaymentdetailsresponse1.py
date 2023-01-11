import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import links as shared_links
from ..shared import meta as shared_meta

class ObWritePaymentDetailsResponse1DataPaymentStatusStatusEnum(str, Enum):
    ACCEPTED = "Accepted"
    ACCEPTED_CANCELLATION_REQUEST = "AcceptedCancellationRequest"
    ACCEPTED_CREDIT_SETTLEMENT_COMPLETED = "AcceptedCreditSettlementCompleted"
    ACCEPTED_CUSTOMER_PROFILE = "AcceptedCustomerProfile"
    ACCEPTED_FUNDS_CHECKED = "AcceptedFundsChecked"
    ACCEPTED_SETTLEMENT_COMPLETED = "AcceptedSettlementCompleted"
    ACCEPTED_SETTLEMENT_IN_PROCESS = "AcceptedSettlementInProcess"
    ACCEPTED_TECHNICAL_VALIDATION = "AcceptedTechnicalValidation"
    ACCEPTED_WITH_CHANGE = "AcceptedWithChange"
    ACCEPTED_WITHOUT_POSTING = "AcceptedWithoutPosting"
    CANCELLED = "Cancelled"
    NO_CANCELLATION_PROCESS = "NoCancellationProcess"
    PARTIALLY_ACCEPTED_CANCELLATION_REQUEST = "PartiallyAcceptedCancellationRequest"
    PARTIALLY_ACCEPTED_TECHNICAL_CORRECT = "PartiallyAcceptedTechnicalCorrect"
    PAYMENT_CANCELLED = "PaymentCancelled"
    PENDING = "Pending"
    PENDING_CANCELLATION_REQUEST = "PendingCancellationRequest"
    RECEIVED = "Received"
    REJECTED = "Rejected"
    REJECTED_CANCELLATION_REQUEST = "RejectedCancellationRequest"

class ObWritePaymentDetailsResponse1DataPaymentStatusStatusDetailStatusReasonEnum(str, Enum):
    CANCELLED = "Cancelled"
    PENDING_FAILING_SETTLEMENT = "PendingFailingSettlement"
    PENDING_SETTLEMENT = "PendingSettlement"
    PROPRIETARY = "Proprietary"
    PROPRIETARY_REJECTION = "ProprietaryRejection"
    SUSPENDED = "Suspended"
    UNMATCHED = "Unmatched"


@dataclass_json
@dataclasses.dataclass
class ObWritePaymentDetailsResponse1DataPaymentStatusStatusDetail:
    r"""ObWritePaymentDetailsResponse1DataPaymentStatusStatusDetail
    Payment status details as per underlying Payment Rail.
    """
    
    status: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Status') }})
    local_instrument: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LocalInstrument') }})
    status_reason: Optional[ObWritePaymentDetailsResponse1DataPaymentStatusStatusDetailStatusReasonEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StatusReason') }})
    status_reason_description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StatusReasonDescription') }})
    

@dataclass_json
@dataclasses.dataclass
class ObWritePaymentDetailsResponse1DataPaymentStatus:
    r"""ObWritePaymentDetailsResponse1DataPaymentStatus
    Payment status details.
    """
    
    payment_transaction_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('PaymentTransactionId') }})
    status: ObWritePaymentDetailsResponse1DataPaymentStatusStatusEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Status') }})
    status_update_date_time: datetime = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('StatusUpdateDateTime'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    status_detail: Optional[ObWritePaymentDetailsResponse1DataPaymentStatusStatusDetail] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StatusDetail') }})
    

@dataclass_json
@dataclasses.dataclass
class ObWritePaymentDetailsResponse1Data:
    payment_status: Optional[list[ObWritePaymentDetailsResponse1DataPaymentStatus]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PaymentStatus') }})
    

@dataclass_json
@dataclasses.dataclass
class ObWritePaymentDetailsResponse1:
    data: ObWritePaymentDetailsResponse1Data = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Data') }})
    links: Optional[shared_links.Links] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Links') }})
    meta: Optional[shared_meta.Meta] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Meta') }})
    
