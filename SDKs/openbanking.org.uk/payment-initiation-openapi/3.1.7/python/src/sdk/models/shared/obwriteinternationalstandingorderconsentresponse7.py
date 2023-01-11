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
from ..shared import obpostaladdress6 as shared_obpostaladdress6
from ..shared import obcashaccountdebtor4 as shared_obcashaccountdebtor4
from ..shared import obscasupportdata1 as shared_obscasupportdata1
from ..shared import links as shared_links
from ..shared import meta as shared_meta
from ..shared import obrisk1 as shared_obrisk1

class ObWriteInternationalStandingOrderConsentResponse7DataAuthorisationAuthorisationTypeEnum(str, Enum):
    ANY = "Any"
    SINGLE = "Single"


@dataclass_json
@dataclasses.dataclass
class ObWriteInternationalStandingOrderConsentResponse7DataAuthorisation:
    r"""ObWriteInternationalStandingOrderConsentResponse7DataAuthorisation
    The authorisation type request from the TPP.
    """
    
    authorisation_type: ObWriteInternationalStandingOrderConsentResponse7DataAuthorisationAuthorisationTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('AuthorisationType') }})
    completion_date_time: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CompletionDateTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    

@dataclass_json
@dataclasses.dataclass
class ObWriteInternationalStandingOrderConsentResponse7DataCharges:
    r"""ObWriteInternationalStandingOrderConsentResponse7DataCharges
    Set of elements used to provide details of a charge for the payment initiation.
    """
    
    amount: shared_obactiveorhistoriccurrencyandamount.ObActiveOrHistoricCurrencyAndAmount = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Amount') }})
    charge_bearer: shared_obchargebearertype1code_enum.ObChargeBearerType1CodeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ChargeBearer') }})
    type: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Type') }})
    

@dataclass_json
@dataclasses.dataclass
class ObWriteInternationalStandingOrderConsentResponse7DataInitiationCreditor:
    r"""ObWriteInternationalStandingOrderConsentResponse7DataInitiationCreditor
    Party to which an amount of money is due.
    """
    
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    postal_address: Optional[shared_obpostaladdress6.ObPostalAddress6] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PostalAddress') }})
    

@dataclass_json
@dataclasses.dataclass
class ObWriteInternationalStandingOrderConsentResponse7DataInitiationCreditorAccount:
    r"""ObWriteInternationalStandingOrderConsentResponse7DataInitiationCreditorAccount
    Provides the details to identify the beneficiary account.
    """
    
    identification: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Identification') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    scheme_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('SchemeName') }})
    secondary_identification: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SecondaryIdentification') }})
    

@dataclass_json
@dataclasses.dataclass
class ObWriteInternationalStandingOrderConsentResponse7DataInitiationCreditorAgent:
    r"""ObWriteInternationalStandingOrderConsentResponse7DataInitiationCreditorAgent
    Party that manages the account on behalf of the account owner, that is manages the registration and booking of entries on the account, calculates balances on the account and provides information about the account.
    This is the servicer of the beneficiary account.
    """
    
    identification: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Identification') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    postal_address: Optional[shared_obpostaladdress6.ObPostalAddress6] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PostalAddress') }})
    scheme_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SchemeName') }})
    

@dataclass_json
@dataclasses.dataclass
class ObWriteInternationalStandingOrderConsentResponse7DataInitiationDebtorAccount:
    r"""ObWriteInternationalStandingOrderConsentResponse7DataInitiationDebtorAccount
    Unambiguous identification of the account of the debtor to which a debit entry will be made as a result of the transaction.
    """
    
    identification: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Identification') }})
    scheme_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('SchemeName') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    secondary_identification: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SecondaryIdentification') }})
    

@dataclass_json
@dataclasses.dataclass
class ObWriteInternationalStandingOrderConsentResponse7DataInitiationInstructedAmount:
    r"""ObWriteInternationalStandingOrderConsentResponse7DataInitiationInstructedAmount
    Amount of money to be moved between the debtor and creditor, before deduction of charges, expressed in the currency as ordered by the initiating party.
    Usage: This amount has to be transported unchanged through the transaction chain.
    """
    
    amount: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Amount') }})
    currency: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Currency') }})
    

@dataclass_json
@dataclasses.dataclass
class ObWriteInternationalStandingOrderConsentResponse7DataInitiation:
    r"""ObWriteInternationalStandingOrderConsentResponse7DataInitiation
    The Initiation payload is sent by the initiating party to the ASPSP. It is used to request movement of funds from the debtor account to a creditor for an international standing order.
    """
    
    creditor_account: ObWriteInternationalStandingOrderConsentResponse7DataInitiationCreditorAccount = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreditorAccount') }})
    currency_of_transfer: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('CurrencyOfTransfer') }})
    first_payment_date_time: datetime = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('FirstPaymentDateTime'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    frequency: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Frequency') }})
    instructed_amount: ObWriteInternationalStandingOrderConsentResponse7DataInitiationInstructedAmount = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('InstructedAmount') }})
    charge_bearer: Optional[shared_obchargebearertype1code_enum.ObChargeBearerType1CodeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ChargeBearer') }})
    creditor: Optional[ObWriteInternationalStandingOrderConsentResponse7DataInitiationCreditor] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Creditor') }})
    creditor_agent: Optional[ObWriteInternationalStandingOrderConsentResponse7DataInitiationCreditorAgent] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreditorAgent') }})
    debtor_account: Optional[ObWriteInternationalStandingOrderConsentResponse7DataInitiationDebtorAccount] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DebtorAccount') }})
    destination_country_code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DestinationCountryCode') }})
    extended_purpose: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ExtendedPurpose') }})
    final_payment_date_time: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FinalPaymentDateTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    number_of_payments: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NumberOfPayments') }})
    purpose: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Purpose') }})
    reference: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Reference') }})
    supplementary_data: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SupplementaryData') }})
    
class ObWriteInternationalStandingOrderConsentResponse7DataPermissionEnum(str, Enum):
    CREATE = "Create"

class ObWriteInternationalStandingOrderConsentResponse7DataReadRefundAccountEnum(str, Enum):
    NO = "No"
    YES = "Yes"

class ObWriteInternationalStandingOrderConsentResponse7DataStatusEnum(str, Enum):
    AUTHORISED = "Authorised"
    AWAITING_AUTHORISATION = "AwaitingAuthorisation"
    CONSUMED = "Consumed"
    REJECTED = "Rejected"


@dataclass_json
@dataclasses.dataclass
class ObWriteInternationalStandingOrderConsentResponse7Data:
    consent_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ConsentId') }})
    creation_date_time: datetime = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreationDateTime'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    initiation: ObWriteInternationalStandingOrderConsentResponse7DataInitiation = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Initiation') }})
    permission: ObWriteInternationalStandingOrderConsentResponse7DataPermissionEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Permission') }})
    status: ObWriteInternationalStandingOrderConsentResponse7DataStatusEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Status') }})
    status_update_date_time: datetime = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('StatusUpdateDateTime'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    authorisation: Optional[ObWriteInternationalStandingOrderConsentResponse7DataAuthorisation] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Authorisation') }})
    charges: Optional[list[ObWriteInternationalStandingOrderConsentResponse7DataCharges]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Charges') }})
    cut_off_date_time: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CutOffDateTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    debtor: Optional[shared_obcashaccountdebtor4.ObCashAccountDebtor4] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Debtor') }})
    read_refund_account: Optional[ObWriteInternationalStandingOrderConsentResponse7DataReadRefundAccountEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ReadRefundAccount') }})
    sca_support_data: Optional[shared_obscasupportdata1.ObscaSupportData1] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SCASupportData') }})
    

@dataclass_json
@dataclasses.dataclass
class ObWriteInternationalStandingOrderConsentResponse7:
    data: ObWriteInternationalStandingOrderConsentResponse7Data = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Data') }})
    risk: shared_obrisk1.ObRisk1 = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Risk') }})
    links: Optional[shared_links.Links] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Links') }})
    meta: Optional[shared_meta.Meta] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Meta') }})
    
