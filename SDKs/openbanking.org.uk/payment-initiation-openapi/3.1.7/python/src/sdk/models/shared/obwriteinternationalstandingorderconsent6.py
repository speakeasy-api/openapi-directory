import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import obpostaladdress6 as shared_obpostaladdress6
from ..shared import obchargebearertype1code_enum as shared_obchargebearertype1code_enum
from ..shared import obscasupportdata1 as shared_obscasupportdata1
from ..shared import obrisk1 as shared_obrisk1

class ObWriteInternationalStandingOrderConsent6DataAuthorisationAuthorisationTypeEnum(str, Enum):
    ANY = "Any"
    SINGLE = "Single"


@dataclass_json
@dataclasses.dataclass
class ObWriteInternationalStandingOrderConsent6DataAuthorisation:
    r"""ObWriteInternationalStandingOrderConsent6DataAuthorisation
    The authorisation type request from the TPP.
    """
    
    authorisation_type: ObWriteInternationalStandingOrderConsent6DataAuthorisationAuthorisationTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('AuthorisationType') }})
    completion_date_time: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CompletionDateTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    

@dataclass_json
@dataclasses.dataclass
class ObWriteInternationalStandingOrderConsent6DataInitiationCreditor:
    r"""ObWriteInternationalStandingOrderConsent6DataInitiationCreditor
    Party to which an amount of money is due.
    """
    
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    postal_address: Optional[shared_obpostaladdress6.ObPostalAddress6] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PostalAddress') }})
    

@dataclass_json
@dataclasses.dataclass
class ObWriteInternationalStandingOrderConsent6DataInitiationCreditorAccount:
    r"""ObWriteInternationalStandingOrderConsent6DataInitiationCreditorAccount
    Provides the details to identify the beneficiary account.
    """
    
    identification: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Identification') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    scheme_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('SchemeName') }})
    secondary_identification: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SecondaryIdentification') }})
    

@dataclass_json
@dataclasses.dataclass
class ObWriteInternationalStandingOrderConsent6DataInitiationCreditorAgent:
    r"""ObWriteInternationalStandingOrderConsent6DataInitiationCreditorAgent
    Party that manages the account on behalf of the account owner, that is manages the registration and booking of entries on the account, calculates balances on the account and provides information about the account.
    This is the servicer of the beneficiary account.
    """
    
    identification: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Identification') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    postal_address: Optional[shared_obpostaladdress6.ObPostalAddress6] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PostalAddress') }})
    scheme_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SchemeName') }})
    

@dataclass_json
@dataclasses.dataclass
class ObWriteInternationalStandingOrderConsent6DataInitiationDebtorAccount:
    r"""ObWriteInternationalStandingOrderConsent6DataInitiationDebtorAccount
    Provides the details to identify the debtor account.
    """
    
    identification: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Identification') }})
    scheme_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('SchemeName') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    secondary_identification: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SecondaryIdentification') }})
    

@dataclass_json
@dataclasses.dataclass
class ObWriteInternationalStandingOrderConsent6DataInitiationInstructedAmount:
    r"""ObWriteInternationalStandingOrderConsent6DataInitiationInstructedAmount
    Amount of money to be moved between the debtor and creditor, before deduction of charges, expressed in the currency as ordered by the initiating party.
    Usage: This amount has to be transported unchanged through the transaction chain.
    """
    
    amount: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Amount') }})
    currency: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Currency') }})
    

@dataclass_json
@dataclasses.dataclass
class ObWriteInternationalStandingOrderConsent6DataInitiation:
    r"""ObWriteInternationalStandingOrderConsent6DataInitiation
    The Initiation payload is sent by the initiating party to the ASPSP. It is used to request movement of funds from the debtor account to a creditor for an international standing order.
    """
    
    creditor_account: ObWriteInternationalStandingOrderConsent6DataInitiationCreditorAccount = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreditorAccount') }})
    currency_of_transfer: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('CurrencyOfTransfer') }})
    first_payment_date_time: datetime = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('FirstPaymentDateTime'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    frequency: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Frequency') }})
    instructed_amount: ObWriteInternationalStandingOrderConsent6DataInitiationInstructedAmount = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('InstructedAmount') }})
    charge_bearer: Optional[shared_obchargebearertype1code_enum.ObChargeBearerType1CodeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ChargeBearer') }})
    creditor: Optional[ObWriteInternationalStandingOrderConsent6DataInitiationCreditor] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Creditor') }})
    creditor_agent: Optional[ObWriteInternationalStandingOrderConsent6DataInitiationCreditorAgent] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreditorAgent') }})
    debtor_account: Optional[ObWriteInternationalStandingOrderConsent6DataInitiationDebtorAccount] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DebtorAccount') }})
    destination_country_code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DestinationCountryCode') }})
    extended_purpose: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ExtendedPurpose') }})
    final_payment_date_time: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FinalPaymentDateTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    number_of_payments: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NumberOfPayments') }})
    purpose: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Purpose') }})
    reference: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Reference') }})
    supplementary_data: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SupplementaryData') }})
    
class ObWriteInternationalStandingOrderConsent6DataPermissionEnum(str, Enum):
    CREATE = "Create"

class ObWriteInternationalStandingOrderConsent6DataReadRefundAccountEnum(str, Enum):
    NO = "No"
    YES = "Yes"


@dataclass_json
@dataclasses.dataclass
class ObWriteInternationalStandingOrderConsent6Data:
    initiation: ObWriteInternationalStandingOrderConsent6DataInitiation = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Initiation') }})
    permission: ObWriteInternationalStandingOrderConsent6DataPermissionEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Permission') }})
    authorisation: Optional[ObWriteInternationalStandingOrderConsent6DataAuthorisation] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Authorisation') }})
    read_refund_account: Optional[ObWriteInternationalStandingOrderConsent6DataReadRefundAccountEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ReadRefundAccount') }})
    sca_support_data: Optional[shared_obscasupportdata1.ObscaSupportData1] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SCASupportData') }})
    

@dataclass_json
@dataclasses.dataclass
class ObWriteInternationalStandingOrderConsent6:
    data: ObWriteInternationalStandingOrderConsent6Data = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Data') }})
    risk: shared_obrisk1.ObRisk1 = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Risk') }})
    
