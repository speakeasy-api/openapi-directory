import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class EmployerEmployerAddress:
    r"""EmployerEmployerAddress
    The employers' address
    """
    
    address1: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Address1') }})
    address2: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Address2') }})
    address3: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Address3') }})
    address4: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Address4') }})
    country: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Country') }})
    postcode: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Postcode') }})
    

@dataclass_json
@dataclasses.dataclass
class EmployerEmployerAutoEnrolmentPension:
    r"""EmployerEmployerAutoEnrolmentPension
    The employer auto enrolments' pension
    """
    
    at_href: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('@href') }})
    at_rel: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('@rel') }})
    at_title: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('@title') }})
    

@dataclass_json
@dataclasses.dataclass
class EmployerEmployerAutoEnrolment:
    r"""EmployerEmployerAutoEnrolment
    The employers' auto enrolment
    """
    
    pension: Optional[EmployerEmployerAutoEnrolmentPension] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Pension') }})
    postponement_date: Optional[date] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PostponementDate'), 'encoder': utils.dateisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    primary_email: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PrimaryEmail') }})
    primary_first_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PrimaryFirstName') }})
    primary_job_title: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PrimaryJobTitle') }})
    primary_last_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PrimaryLastName') }})
    primary_telephone: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PrimaryTelephone') }})
    re_enrolment_day_offset: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ReEnrolmentDayOffset') }})
    re_enrolment_month_offset: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ReEnrolmentMonthOffset') }})
    secondary_email: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SecondaryEmail') }})
    secondary_first_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SecondaryFirstName') }})
    secondary_job_title: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SecondaryJobTitle') }})
    secondary_last_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SecondaryLastName') }})
    secondary_telephone: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SecondaryTelephone') }})
    staging_date: Optional[date] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StagingDate'), 'encoder': utils.dateisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    

@dataclass_json
@dataclasses.dataclass
class EmployerEmployerBankAccount:
    r"""EmployerEmployerBankAccount
    The employers' bank account
    """
    
    account_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AccountName') }})
    account_number: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AccountNumber') }})
    reference: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Reference') }})
    sort_code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SortCode') }})
    
class EmployerEmployerHmrcSettingsSenderEnum(str, Enum):
    EMPLOYER = "Employer"
    INDIVIDUAL = "Individual"
    COMPANY = "Company"
    AGENT = "Agent"
    BUREAU = "Bureau"
    PARTNERSHIP = "Partnership"
    TRUST = "Trust"
    GOVERNMENT = "Government"
    ACTING_IN_CAPACITY = "ActingInCapacity"
    OTHER = "Other"

class EmployerEmployerHmrcSettingsStateAidSectorEnum(str, Enum):
    AGRICULTURE = "Agriculture"
    FISHERIES_AQUACULTURE = "FisheriesAquaculture"
    ROAD_TRANSPORT = "RoadTransport"
    INDUSTRIAL = "Industrial"
    NOT_APPLICABLE = "NotApplicable"


@dataclass_json
@dataclasses.dataclass
class EmployerEmployerHmrcSettings:
    r"""EmployerEmployerHmrcSettings
    The employers' hmrc settings
    """
    
    accounting_office_ref: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AccountingOfficeRef') }})
    cotax_ref: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('COTAXRef') }})
    contact_email: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ContactEmail') }})
    contact_fax: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ContactFax') }})
    contact_first_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ContactFirstName') }})
    contact_last_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ContactLastName') }})
    contact_telephone: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ContactTelephone') }})
    employment_allowance_override: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EmploymentAllowanceOverride') }})
    password: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Password') }})
    sautr: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SAUTR') }})
    sender: Optional[EmployerEmployerHmrcSettingsSenderEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Sender') }})
    sender_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SenderId') }})
    state_aid_sector: Optional[EmployerEmployerHmrcSettingsStateAidSectorEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StateAidSector') }})
    tax_office_number: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TaxOfficeNumber') }})
    tax_office_reference: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TaxOfficeReference') }})
    
class EmployerEmployerRegionEnum(str, Enum):
    NOT_SET = "NotSet"
    ENGLAND = "England"
    SCOTLAND = "Scotland"
    WALES = "Wales"

class EmployerEmployerRuleExclusionsEnum(str, Enum):
    NONE = "None"
    NI_MISSING_PAY_INSTRUCTION_RULE = "NiMissingPayInstructionRule"
    TAX_MISSING_PAY_INSTRUCTION_RULE = "TaxMissingPayInstructionRule"
    TAX_CODE_UPLIFT_RULE = "TaxCodeUpliftRule"
    NI_SET_EXPECTED_LETTER_RULE = "NiSetExpectedLetterRule"
    NI_DATE_OF_BIRTH_CHANGE_RETROSPECTIVE_C_RULE = "NiDateOfBirthChangeRetrospectiveCRule"
    NI_DEFERMENT_STATUS_CHANGE_RULE = "NiDefermentStatusChangeRule"
    NI_END_CONTRACTED_OUT_TRANSFER_RULE = "NiEndContractedOutTransferRule"
    PAYMENT_AFTER_LEAVING_RULE = "PaymentAfterLeavingRule"
    LEAVER_END_INSTRUCTIONS_RULE = "LeaverEndInstructionsRule"
    P45_STUDENT_LOAN_INSTRUCTION_RULE = "P45StudentLoanInstructionRule"
    P45_TAX_INSTRUCTION_RULE = "P45TaxInstructionRule"
    P45_YTD_TAX_RULE = "P45YtdTaxRule"
    YTD_INSTRUCTION_RULE = "YtdInstructionRule"
    TAX_CODE_REGION_CHANGE_RULE = "TaxCodeRegionChangeRule"
    AUTO_ENROLMENT_STATUS_CHANGE_RULE = "AutoEnrolmentStatusChangeRule"
    EMPLOYEE_DECEASED_RULE = "EmployeeDeceasedRule"
    BENEFIT_INSTRUCTION_AUTO_END_RULE = "BenefitInstructionAutoEndRule"

class EmployerEmployerTerritoryEnum(str, Enum):
    UNITED_KINGDOM = "UnitedKingdom"


@dataclass_json
@dataclasses.dataclass
class EmployerEmployer:
    address: Optional[EmployerEmployerAddress] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Address') }})
    apprenticeship_levy_allowance: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ApprenticeshipLevyAllowance') }})
    auto_enrolment: Optional[EmployerEmployerAutoEnrolment] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AutoEnrolment') }})
    bacs_service_user_number: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BacsServiceUserNumber') }})
    bank_account: Optional[EmployerEmployerBankAccount] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BankAccount') }})
    calculate_apprenticeship_levy: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CalculateApprenticeshipLevy') }})
    claim_employment_allowance: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ClaimEmploymentAllowance') }})
    claim_small_employer_relief: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ClaimSmallEmployerRelief') }})
    effective_date: Optional[date] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EffectiveDate'), 'encoder': utils.dateisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    hmrc_settings: Optional[EmployerEmployerHmrcSettings] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('HmrcSettings') }})
    meta_data: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MetaData') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    region: Optional[EmployerEmployerRegionEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Region') }})
    revision: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Revision') }})
    rule_exclusions: Optional[EmployerEmployerRuleExclusionsEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RuleExclusions') }})
    territory: Optional[EmployerEmployerTerritoryEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Territory') }})
    

@dataclass_json
@dataclasses.dataclass
class Employer:
    employer: Optional[EmployerEmployer] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Employer') }})
    
