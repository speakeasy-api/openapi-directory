import dataclasses
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import obpostaladdress6 as shared_obpostaladdress6
from ..shared import obchargebearertype1code_enum as shared_obchargebearertype1code_enum
from ..shared import obrisk1 as shared_obrisk1


@dataclass_json
@dataclasses.dataclass
class ObWriteInternational3DataInitiationCreditor:
    r"""ObWriteInternational3DataInitiationCreditor
    Party to which an amount of money is due.
    """
    
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    postal_address: Optional[shared_obpostaladdress6.ObPostalAddress6] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PostalAddress') }})
    

@dataclass_json
@dataclasses.dataclass
class ObWriteInternational3DataInitiationCreditorAccount:
    r"""ObWriteInternational3DataInitiationCreditorAccount
    Unambiguous identification of the account of the creditor to which a credit entry will be posted as a result of the payment transaction.
    """
    
    identification: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Identification') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    scheme_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('SchemeName') }})
    secondary_identification: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SecondaryIdentification') }})
    

@dataclass_json
@dataclasses.dataclass
class ObWriteInternational3DataInitiationCreditorAgent:
    r"""ObWriteInternational3DataInitiationCreditorAgent
    Financial institution servicing an account for the creditor.
    """
    
    identification: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Identification') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    postal_address: Optional[shared_obpostaladdress6.ObPostalAddress6] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PostalAddress') }})
    scheme_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SchemeName') }})
    

@dataclass_json
@dataclasses.dataclass
class ObWriteInternational3DataInitiationDebtorAccount:
    r"""ObWriteInternational3DataInitiationDebtorAccount
    Unambiguous identification of the account of the debtor to which a debit entry will be made as a result of the transaction.
    """
    
    identification: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Identification') }})
    scheme_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('SchemeName') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    secondary_identification: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SecondaryIdentification') }})
    
class ObWriteInternational3DataInitiationExchangeRateInformationRateTypeEnum(str, Enum):
    ACTUAL = "Actual"
    AGREED = "Agreed"
    INDICATIVE = "Indicative"


@dataclass_json
@dataclasses.dataclass
class ObWriteInternational3DataInitiationExchangeRateInformation:
    r"""ObWriteInternational3DataInitiationExchangeRateInformation
    Provides details on the currency exchange rate and contract.
    """
    
    rate_type: ObWriteInternational3DataInitiationExchangeRateInformationRateTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('RateType') }})
    unit_currency: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('UnitCurrency') }})
    contract_identification: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ContractIdentification') }})
    exchange_rate: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ExchangeRate') }})
    

@dataclass_json
@dataclasses.dataclass
class ObWriteInternational3DataInitiationInstructedAmount:
    r"""ObWriteInternational3DataInitiationInstructedAmount
    Amount of money to be moved between the debtor and creditor, before deduction of charges, expressed in the currency as ordered by the initiating party.
    Usage: This amount has to be transported unchanged through the transaction chain.
    """
    
    amount: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Amount') }})
    currency: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Currency') }})
    
class ObWriteInternational3DataInitiationInstructionPriorityEnum(str, Enum):
    NORMAL = "Normal"
    URGENT = "Urgent"


@dataclass_json
@dataclasses.dataclass
class ObWriteInternational3DataInitiationRemittanceInformation:
    r"""ObWriteInternational3DataInitiationRemittanceInformation
    Information supplied to enable the matching of an entry with the items that the transfer is intended to settle, such as commercial invoices in an accounts' receivable system.
    """
    
    reference: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Reference') }})
    unstructured: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Unstructured') }})
    

@dataclass_json
@dataclasses.dataclass
class ObWriteInternational3DataInitiation:
    r"""ObWriteInternational3DataInitiation
    The Initiation payload is sent by the initiating party to the ASPSP. It is used to request movement of funds from the debtor account to a creditor for a single international payment.
    """
    
    creditor_account: ObWriteInternational3DataInitiationCreditorAccount = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreditorAccount') }})
    currency_of_transfer: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('CurrencyOfTransfer') }})
    end_to_end_identification: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('EndToEndIdentification') }})
    instructed_amount: ObWriteInternational3DataInitiationInstructedAmount = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('InstructedAmount') }})
    instruction_identification: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('InstructionIdentification') }})
    charge_bearer: Optional[shared_obchargebearertype1code_enum.ObChargeBearerType1CodeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ChargeBearer') }})
    creditor: Optional[ObWriteInternational3DataInitiationCreditor] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Creditor') }})
    creditor_agent: Optional[ObWriteInternational3DataInitiationCreditorAgent] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreditorAgent') }})
    debtor_account: Optional[ObWriteInternational3DataInitiationDebtorAccount] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DebtorAccount') }})
    destination_country_code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DestinationCountryCode') }})
    exchange_rate_information: Optional[ObWriteInternational3DataInitiationExchangeRateInformation] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ExchangeRateInformation') }})
    extended_purpose: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ExtendedPurpose') }})
    instruction_priority: Optional[ObWriteInternational3DataInitiationInstructionPriorityEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('InstructionPriority') }})
    local_instrument: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LocalInstrument') }})
    purpose: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Purpose') }})
    remittance_information: Optional[ObWriteInternational3DataInitiationRemittanceInformation] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RemittanceInformation') }})
    supplementary_data: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SupplementaryData') }})
    

@dataclass_json
@dataclasses.dataclass
class ObWriteInternational3Data:
    consent_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ConsentId') }})
    initiation: ObWriteInternational3DataInitiation = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Initiation') }})
    

@dataclass_json
@dataclasses.dataclass
class ObWriteInternational3:
    data: ObWriteInternational3Data = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Data') }})
    risk: shared_obrisk1.ObRisk1 = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Risk') }})
    
