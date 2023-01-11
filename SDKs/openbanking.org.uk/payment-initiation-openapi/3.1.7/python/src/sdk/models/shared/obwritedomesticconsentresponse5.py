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

class ObWriteDomesticConsentResponse5DataAuthorisationAuthorisationTypeEnum(str, Enum):
    ANY = "Any"
    SINGLE = "Single"


@dataclass_json
@dataclasses.dataclass
class ObWriteDomesticConsentResponse5DataAuthorisation:
    r"""ObWriteDomesticConsentResponse5DataAuthorisation
    The authorisation type request from the TPP.
    """
    
    authorisation_type: ObWriteDomesticConsentResponse5DataAuthorisationAuthorisationTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('AuthorisationType') }})
    completion_date_time: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CompletionDateTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    

@dataclass_json
@dataclasses.dataclass
class ObWriteDomesticConsentResponse5DataCharges:
    r"""ObWriteDomesticConsentResponse5DataCharges
    Set of elements used to provide details of a charge for the payment initiation.
    """
    
    amount: shared_obactiveorhistoriccurrencyandamount.ObActiveOrHistoricCurrencyAndAmount = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Amount') }})
    charge_bearer: shared_obchargebearertype1code_enum.ObChargeBearerType1CodeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ChargeBearer') }})
    type: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Type') }})
    

@dataclass_json
@dataclasses.dataclass
class ObWriteDomesticConsentResponse5DataInitiationCreditorAccount:
    r"""ObWriteDomesticConsentResponse5DataInitiationCreditorAccount
    Unambiguous identification of the account of the creditor to which a credit entry will be posted as a result of the payment transaction.
    """
    
    identification: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Identification') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    scheme_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('SchemeName') }})
    secondary_identification: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SecondaryIdentification') }})
    

@dataclass_json
@dataclasses.dataclass
class ObWriteDomesticConsentResponse5DataInitiationDebtorAccount:
    r"""ObWriteDomesticConsentResponse5DataInitiationDebtorAccount
    Unambiguous identification of the account of the debtor to which a debit entry will be made as a result of the transaction.
    """
    
    identification: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Identification') }})
    scheme_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('SchemeName') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    secondary_identification: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SecondaryIdentification') }})
    

@dataclass_json
@dataclasses.dataclass
class ObWriteDomesticConsentResponse5DataInitiationInstructedAmount:
    r"""ObWriteDomesticConsentResponse5DataInitiationInstructedAmount
    Amount of money to be moved between the debtor and creditor, before deduction of charges, expressed in the currency as ordered by the initiating party.
    Usage: This amount has to be transported unchanged through the transaction chain.
    """
    
    amount: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Amount') }})
    currency: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Currency') }})
    

@dataclass_json
@dataclasses.dataclass
class ObWriteDomesticConsentResponse5DataInitiationRemittanceInformation:
    r"""ObWriteDomesticConsentResponse5DataInitiationRemittanceInformation
    Information supplied to enable the matching of an entry with the items that the transfer is intended to settle, such as commercial invoices in an accounts' receivable system.
    """
    
    reference: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Reference') }})
    unstructured: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Unstructured') }})
    

@dataclass_json
@dataclasses.dataclass
class ObWriteDomesticConsentResponse5DataInitiation:
    r"""ObWriteDomesticConsentResponse5DataInitiation
    The Initiation payload is sent by the initiating party to the ASPSP. It is used to request movement of funds from the debtor account to a creditor for a single domestic payment.
    """
    
    creditor_account: ObWriteDomesticConsentResponse5DataInitiationCreditorAccount = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreditorAccount') }})
    end_to_end_identification: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('EndToEndIdentification') }})
    instructed_amount: ObWriteDomesticConsentResponse5DataInitiationInstructedAmount = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('InstructedAmount') }})
    instruction_identification: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('InstructionIdentification') }})
    creditor_postal_address: Optional[shared_obpostaladdress6.ObPostalAddress6] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreditorPostalAddress') }})
    debtor_account: Optional[ObWriteDomesticConsentResponse5DataInitiationDebtorAccount] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DebtorAccount') }})
    local_instrument: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LocalInstrument') }})
    remittance_information: Optional[ObWriteDomesticConsentResponse5DataInitiationRemittanceInformation] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RemittanceInformation') }})
    supplementary_data: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SupplementaryData') }})
    
class ObWriteDomesticConsentResponse5DataReadRefundAccountEnum(str, Enum):
    NO = "No"
    YES = "Yes"

class ObWriteDomesticConsentResponse5DataStatusEnum(str, Enum):
    AUTHORISED = "Authorised"
    AWAITING_AUTHORISATION = "AwaitingAuthorisation"
    CONSUMED = "Consumed"
    REJECTED = "Rejected"


@dataclass_json
@dataclasses.dataclass
class ObWriteDomesticConsentResponse5Data:
    consent_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ConsentId') }})
    creation_date_time: datetime = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreationDateTime'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    initiation: ObWriteDomesticConsentResponse5DataInitiation = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Initiation') }})
    status: ObWriteDomesticConsentResponse5DataStatusEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Status') }})
    status_update_date_time: datetime = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('StatusUpdateDateTime'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    authorisation: Optional[ObWriteDomesticConsentResponse5DataAuthorisation] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Authorisation') }})
    charges: Optional[list[ObWriteDomesticConsentResponse5DataCharges]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Charges') }})
    cut_off_date_time: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CutOffDateTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    debtor: Optional[shared_obcashaccountdebtor4.ObCashAccountDebtor4] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Debtor') }})
    expected_execution_date_time: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ExpectedExecutionDateTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    expected_settlement_date_time: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ExpectedSettlementDateTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    read_refund_account: Optional[ObWriteDomesticConsentResponse5DataReadRefundAccountEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ReadRefundAccount') }})
    sca_support_data: Optional[shared_obscasupportdata1.ObscaSupportData1] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SCASupportData') }})
    

@dataclass_json
@dataclasses.dataclass
class ObWriteDomesticConsentResponse5:
    data: ObWriteDomesticConsentResponse5Data = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Data') }})
    risk: shared_obrisk1.ObRisk1 = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Risk') }})
    links: Optional[shared_links.Links] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Links') }})
    meta: Optional[shared_meta.Meta] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Meta') }})
    
