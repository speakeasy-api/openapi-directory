import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import obactiveorhistoriccurrencyandamount as shared_obactiveorhistoriccurrencyandamount
from ..shared import obchargebearertype1code_enum as shared_obchargebearertype1code_enum
from ..shared import obcashaccountdebtor4 as shared_obcashaccountdebtor4
from ..shared import links as shared_links
from ..shared import meta as shared_meta


@dataclass_json
@dataclasses.dataclass
class ObWriteDomesticStandingOrderResponse6DataCharges:
    r"""ObWriteDomesticStandingOrderResponse6DataCharges
    Set of elements used to provide details of a charge for the payment initiation.
    """
    
    amount: shared_obactiveorhistoriccurrencyandamount.ObActiveOrHistoricCurrencyAndAmount = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Amount') }})
    charge_bearer: shared_obchargebearertype1code_enum.ObChargeBearerType1CodeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ChargeBearer') }})
    type: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Type') }})
    

@dataclass_json
@dataclasses.dataclass
class ObWriteDomesticStandingOrderResponse6DataInitiationCreditorAccount:
    r"""ObWriteDomesticStandingOrderResponse6DataInitiationCreditorAccount
    Identification assigned by an institution to identify an account. This identification is known by the account owner.
    """
    
    identification: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Identification') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    scheme_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('SchemeName') }})
    secondary_identification: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SecondaryIdentification') }})
    

@dataclass_json
@dataclasses.dataclass
class ObWriteDomesticStandingOrderResponse6DataInitiationDebtorAccount:
    r"""ObWriteDomesticStandingOrderResponse6DataInitiationDebtorAccount
    Unambiguous identification of the account of the debtor to which a debit entry will be made as a result of the transaction.
    """
    
    identification: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Identification') }})
    scheme_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('SchemeName') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    secondary_identification: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SecondaryIdentification') }})
    

@dataclass_json
@dataclasses.dataclass
class ObWriteDomesticStandingOrderResponse6DataInitiationFinalPaymentAmount:
    r"""ObWriteDomesticStandingOrderResponse6DataInitiationFinalPaymentAmount
    The amount of the final Standing Order
    """
    
    amount: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Amount') }})
    currency: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Currency') }})
    

@dataclass_json
@dataclasses.dataclass
class ObWriteDomesticStandingOrderResponse6DataInitiationFirstPaymentAmount:
    r"""ObWriteDomesticStandingOrderResponse6DataInitiationFirstPaymentAmount
    The amount of the first Standing Order
    """
    
    amount: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Amount') }})
    currency: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Currency') }})
    

@dataclass_json
@dataclasses.dataclass
class ObWriteDomesticStandingOrderResponse6DataInitiationRecurringPaymentAmount:
    r"""ObWriteDomesticStandingOrderResponse6DataInitiationRecurringPaymentAmount
    The amount of the recurring Standing Order
    """
    
    amount: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Amount') }})
    currency: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Currency') }})
    

@dataclass_json
@dataclasses.dataclass
class ObWriteDomesticStandingOrderResponse6DataInitiation:
    r"""ObWriteDomesticStandingOrderResponse6DataInitiation
    The Initiation payload is sent by the initiating party to the ASPSP. It is used to request movement of funds from the debtor account to a creditor for a domestic standing order.
    """
    
    creditor_account: ObWriteDomesticStandingOrderResponse6DataInitiationCreditorAccount = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreditorAccount') }})
    first_payment_amount: ObWriteDomesticStandingOrderResponse6DataInitiationFirstPaymentAmount = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('FirstPaymentAmount') }})
    first_payment_date_time: datetime = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('FirstPaymentDateTime'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    frequency: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Frequency') }})
    debtor_account: Optional[ObWriteDomesticStandingOrderResponse6DataInitiationDebtorAccount] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DebtorAccount') }})
    final_payment_amount: Optional[ObWriteDomesticStandingOrderResponse6DataInitiationFinalPaymentAmount] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FinalPaymentAmount') }})
    final_payment_date_time: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FinalPaymentDateTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    number_of_payments: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NumberOfPayments') }})
    recurring_payment_amount: Optional[ObWriteDomesticStandingOrderResponse6DataInitiationRecurringPaymentAmount] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RecurringPaymentAmount') }})
    recurring_payment_date_time: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RecurringPaymentDateTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    reference: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Reference') }})
    supplementary_data: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SupplementaryData') }})
    
class ObWriteDomesticStandingOrderResponse6DataMultiAuthorisationStatusEnum(str, Enum):
    AUTHORISED = "Authorised"
    AWAITING_FURTHER_AUTHORISATION = "AwaitingFurtherAuthorisation"
    REJECTED = "Rejected"


@dataclass_json
@dataclasses.dataclass
class ObWriteDomesticStandingOrderResponse6DataMultiAuthorisation:
    r"""ObWriteDomesticStandingOrderResponse6DataMultiAuthorisation
    The multiple authorisation flow response from the ASPSP.
    """
    
    status: ObWriteDomesticStandingOrderResponse6DataMultiAuthorisationStatusEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Status') }})
    expiration_date_time: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ExpirationDateTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    last_update_date_time: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LastUpdateDateTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    number_received: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NumberReceived') }})
    number_required: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NumberRequired') }})
    

@dataclass_json
@dataclasses.dataclass
class ObWriteDomesticStandingOrderResponse6DataRefundAccount:
    r"""ObWriteDomesticStandingOrderResponse6DataRefundAccount
    Provides the details to identify an account.
    """
    
    identification: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Identification') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    scheme_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('SchemeName') }})
    secondary_identification: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SecondaryIdentification') }})
    

@dataclass_json
@dataclasses.dataclass
class ObWriteDomesticStandingOrderResponse6DataRefund:
    r"""ObWriteDomesticStandingOrderResponse6DataRefund
    Unambiguous identification of the refund account to which a refund will be made as a result of the transaction.
    """
    
    account: ObWriteDomesticStandingOrderResponse6DataRefundAccount = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Account') }})
    
class ObWriteDomesticStandingOrderResponse6DataStatusEnum(str, Enum):
    CANCELLED = "Cancelled"
    INITIATION_COMPLETED = "InitiationCompleted"
    INITIATION_FAILED = "InitiationFailed"
    INITIATION_PENDING = "InitiationPending"


@dataclass_json
@dataclasses.dataclass
class ObWriteDomesticStandingOrderResponse6Data:
    consent_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ConsentId') }})
    creation_date_time: datetime = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreationDateTime'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    domestic_standing_order_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DomesticStandingOrderId') }})
    initiation: ObWriteDomesticStandingOrderResponse6DataInitiation = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Initiation') }})
    status: ObWriteDomesticStandingOrderResponse6DataStatusEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Status') }})
    status_update_date_time: datetime = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('StatusUpdateDateTime'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    charges: Optional[list[ObWriteDomesticStandingOrderResponse6DataCharges]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Charges') }})
    debtor: Optional[shared_obcashaccountdebtor4.ObCashAccountDebtor4] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Debtor') }})
    multi_authorisation: Optional[ObWriteDomesticStandingOrderResponse6DataMultiAuthorisation] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MultiAuthorisation') }})
    refund: Optional[ObWriteDomesticStandingOrderResponse6DataRefund] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Refund') }})
    

@dataclass_json
@dataclasses.dataclass
class ObWriteDomesticStandingOrderResponse6:
    data: ObWriteDomesticStandingOrderResponse6Data = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Data') }})
    links: Optional[shared_links.Links] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Links') }})
    meta: Optional[shared_meta.Meta] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Meta') }})
    
