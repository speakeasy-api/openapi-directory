import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import obpostaladdress6 as shared_obpostaladdress6
from ..shared import obscasupportdata1 as shared_obscasupportdata1
from ..shared import obrisk1 as shared_obrisk1

class ObWriteDomesticScheduledConsent4DataAuthorisationAuthorisationTypeEnum(str, Enum):
    ANY = "Any"
    SINGLE = "Single"


@dataclass_json
@dataclasses.dataclass
class ObWriteDomesticScheduledConsent4DataAuthorisation:
    r"""ObWriteDomesticScheduledConsent4DataAuthorisation
    The authorisation type request from the TPP.
    """
    
    authorisation_type: ObWriteDomesticScheduledConsent4DataAuthorisationAuthorisationTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('AuthorisationType') }})
    completion_date_time: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CompletionDateTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    

@dataclass_json
@dataclasses.dataclass
class ObWriteDomesticScheduledConsent4DataInitiationCreditorAccount:
    r"""ObWriteDomesticScheduledConsent4DataInitiationCreditorAccount
    Unambiguous identification of the account of the creditor to which a credit entry will be posted as a result of the payment transaction.
    """
    
    identification: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Identification') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    scheme_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('SchemeName') }})
    secondary_identification: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SecondaryIdentification') }})
    

@dataclass_json
@dataclasses.dataclass
class ObWriteDomesticScheduledConsent4DataInitiationDebtorAccount:
    r"""ObWriteDomesticScheduledConsent4DataInitiationDebtorAccount
    Unambiguous identification of the account of the debtor to which a debit entry will be made as a result of the transaction.
    """
    
    identification: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Identification') }})
    scheme_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('SchemeName') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    secondary_identification: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SecondaryIdentification') }})
    

@dataclass_json
@dataclasses.dataclass
class ObWriteDomesticScheduledConsent4DataInitiationInstructedAmount:
    r"""ObWriteDomesticScheduledConsent4DataInitiationInstructedAmount
    Amount of money to be moved between the debtor and creditor, before deduction of charges, expressed in the currency as ordered by the initiating party.
    Usage: This amount has to be transported unchanged through the transaction chain.
    """
    
    amount: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Amount') }})
    currency: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Currency') }})
    

@dataclass_json
@dataclasses.dataclass
class ObWriteDomesticScheduledConsent4DataInitiationRemittanceInformation:
    r"""ObWriteDomesticScheduledConsent4DataInitiationRemittanceInformation
    Information supplied to enable the matching of an entry with the items that the transfer is intended to settle, such as commercial invoices in an accounts' receivable system.
    """
    
    reference: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Reference') }})
    unstructured: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Unstructured') }})
    

@dataclass_json
@dataclasses.dataclass
class ObWriteDomesticScheduledConsent4DataInitiation:
    r"""ObWriteDomesticScheduledConsent4DataInitiation
    The Initiation payload is sent by the initiating party to the ASPSP. It is used to request movement of funds from the debtor account to a creditor for a single scheduled domestic payment.
    """
    
    creditor_account: ObWriteDomesticScheduledConsent4DataInitiationCreditorAccount = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreditorAccount') }})
    instructed_amount: ObWriteDomesticScheduledConsent4DataInitiationInstructedAmount = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('InstructedAmount') }})
    instruction_identification: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('InstructionIdentification') }})
    requested_execution_date_time: datetime = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('RequestedExecutionDateTime'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    creditor_postal_address: Optional[shared_obpostaladdress6.ObPostalAddress6] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreditorPostalAddress') }})
    debtor_account: Optional[ObWriteDomesticScheduledConsent4DataInitiationDebtorAccount] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DebtorAccount') }})
    end_to_end_identification: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EndToEndIdentification') }})
    local_instrument: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LocalInstrument') }})
    remittance_information: Optional[ObWriteDomesticScheduledConsent4DataInitiationRemittanceInformation] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RemittanceInformation') }})
    supplementary_data: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SupplementaryData') }})
    
class ObWriteDomesticScheduledConsent4DataPermissionEnum(str, Enum):
    CREATE = "Create"

class ObWriteDomesticScheduledConsent4DataReadRefundAccountEnum(str, Enum):
    NO = "No"
    YES = "Yes"


@dataclass_json
@dataclasses.dataclass
class ObWriteDomesticScheduledConsent4Data:
    initiation: ObWriteDomesticScheduledConsent4DataInitiation = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Initiation') }})
    permission: ObWriteDomesticScheduledConsent4DataPermissionEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Permission') }})
    authorisation: Optional[ObWriteDomesticScheduledConsent4DataAuthorisation] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Authorisation') }})
    read_refund_account: Optional[ObWriteDomesticScheduledConsent4DataReadRefundAccountEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ReadRefundAccount') }})
    sca_support_data: Optional[shared_obscasupportdata1.ObscaSupportData1] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SCASupportData') }})
    

@dataclass_json
@dataclasses.dataclass
class ObWriteDomesticScheduledConsent4:
    data: ObWriteDomesticScheduledConsent4Data = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Data') }})
    risk: shared_obrisk1.ObRisk1 = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Risk') }})
    
