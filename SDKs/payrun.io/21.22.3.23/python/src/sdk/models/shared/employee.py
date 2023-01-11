import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class EmployeeEmployeeAeAssessmentOverrideEnum(str, Enum):
    NONE = "None"
    OPT_OUT = "OptOut"
    OPT_IN = "OptIn"
    VOLUNTARY_JOINER = "VoluntaryJoiner"
    CONTRACTUAL_PENSION = "ContractualPension"
    CEASED_MEMBERSHIP = "CeasedMembership"
    LEAVER = "Leaver"
    EXCLUDED = "Excluded"

class EmployeeEmployeeAeExclusionReasonCodeEnum(str, Enum):
    OTHER_NOT_KNOWN = "OtherNotKnown"
    NOT_A_WORKER = "NotAWorker"
    NOT_UK_WORKER = "NotUKWorker"
    TEMPORARY_UK_WORKER = "TemporaryUKWorker"
    OUTSIDE_AGE_RANGE = "OutsideAgeRange"
    SINGLE_EMPLOYEE_DIRECTOR = "SingleEmployeeDirector"
    CEASED_MEMBERSHIP_WITHIN12_MONTHS = "CeasedMembershipWithin12Months"
    CEASED_MEMBERSHIP_BEYOND12_MONTHS = "CeasedMembershipBeyond12Months"
    WORKER_WULS_WITHIN12_MONTH = "WorkerWULSWithin12Month"
    WORKER_WULS_BEYOND12_MONTH = "WorkerWULSBeyond12Month"
    WORKER_IN_NOTICE_PERIOD = "WorkerInNoticePeriod"
    WORKER_TAX_PROTECTION = "WorkerTaxProtection"


@dataclass_json
@dataclasses.dataclass
class EmployeeEmployeeAddress:
    r"""EmployeeEmployeeAddress
    The employees' address
    """
    
    address1: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Address1') }})
    address2: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Address2') }})
    address3: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Address3') }})
    address4: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Address4') }})
    country: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Country') }})
    postcode: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Postcode') }})
    

@dataclass_json
@dataclasses.dataclass
class EmployeeEmployeeBankAccount:
    r"""EmployeeEmployeeBankAccount
    The employees' bank account
    """
    
    account_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AccountName') }})
    account_number: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AccountNumber') }})
    reference: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Reference') }})
    sort_code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SortCode') }})
    

@dataclass_json
@dataclasses.dataclass
class EmployeeEmployeeEmployeePartner:
    r"""EmployeeEmployeeEmployeePartner
    The employees' employee partner
    """
    
    first_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FirstName') }})
    initials: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Initials') }})
    last_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LastName') }})
    middle_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MiddleName') }})
    ni_number: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NiNumber') }})
    
class EmployeeEmployeeGenderEnum(str, Enum):
    UNKNOWN = "Unknown"
    MALE = "Male"
    FEMALE = "Female"

class EmployeeEmployeeLeaverReasonEnum(str, Enum):
    RESIGNED = "Resigned"
    DISMISSED = "Dismissed"
    REDUNDANT = "Redundant"
    RETIRED = "Retired"
    DECEASED = "Deceased"
    LEGAL_CUSTODY = "LegalCustody"
    OTHER = "Other"

class EmployeeEmployeeMaritalStatusEnum(str, Enum):
    NOT_SET = "NotSet"
    SINGLE = "Single"
    MARRIED = "Married"
    DIVORCED = "Divorced"
    WIDOWED = "Widowed"

class EmployeeEmployeeNicLiabilityEnum(str, Enum):
    HAS_OTHER_JOB = "HasOtherJob"
    IS_FEMALE_ENTITLED_TO_REDUCED_RATE = "IsFemaleEntitledToReducedRate"
    IS_NOT_LIABLE = "IsNotLiable"
    IS_CONTRACTED_OUT = "IsContractedOut"
    IS_FULLY_LIABLE = "IsFullyLiable"
    IS_APPRENTICE = "IsApprentice"
    LEAVER_BEYOND6_WEEKS = "LeaverBeyond6Weeks"
    PAYMENT_AFTER_LEAVING = "PaymentAfterLeaving"


@dataclass_json
@dataclasses.dataclass
class EmployeeEmployeePaySchedule:
    r"""EmployeeEmployeePaySchedule
    The employees' pay schedule
    """
    
    at_href: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('@href') }})
    at_rel: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('@rel') }})
    at_title: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('@title') }})
    
class EmployeeEmployeePaymentMethodEnum(str, Enum):
    NOT_SET = "NotSet"
    CASH = "Cash"
    CHEQUE = "Cheque"
    BACS = "BACS"
    FASTER_PAYMENTS = "FasterPayments"
    OTHER = "Other"

class EmployeeEmployeeRegionEnum(str, Enum):
    NOT_SET = "NotSet"
    ENGLAND = "England"
    SCOTLAND = "Scotland"
    WALES = "Wales"

class EmployeeEmployeeRuleExclusionsEnum(str, Enum):
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

class EmployeeEmployeeSecondedEnum(str, Enum):
    NOT_SET = "NotSet"
    STAY183_DAYS_OR_MORE = "Stay183DaysOrMore"
    STAY_LESS_THAN183_DAYS = "StayLessThan183Days"
    IN_OUT_UK = "InOutUk"

class EmployeeEmployeeStarterDeclarationEnum(str, Enum):
    PREVIOUSLY_REPORTED = "PreviouslyReported"
    A = "A"
    B = "B"
    C = "C"

class EmployeeEmployeeTerritoryEnum(str, Enum):
    UNITED_KINGDOM = "UnitedKingdom"

class EmployeeEmployeeWorkingWeekEnum(str, Enum):
    NONE = "None"
    MONDAY = "Monday"
    TUESDAY = "Tuesday"
    WEDNESDAY = "Wednesday"
    THURSDAY = "Thursday"
    FRIDAY = "Friday"
    ALL_WEEK_DAYS = "AllWeekDays"
    SATURDAY = "Saturday"
    SUNDAY = "Sunday"
    ALL_DAYS = "AllDays"


@dataclass_json
@dataclasses.dataclass
class EmployeeEmployee:
    ae_assessment_override: Optional[EmployeeEmployeeAeAssessmentOverrideEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AEAssessmentOverride') }})
    ae_assessment_override_date: Optional[date] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AEAssessmentOverrideDate'), 'encoder': utils.dateisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    ae_exclusion_reason_code: Optional[EmployeeEmployeeAeExclusionReasonCodeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AEExclusionReasonCode') }})
    ae_postponement_date: Optional[date] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AEPostponementDate'), 'encoder': utils.dateisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    address: Optional[EmployeeEmployeeAddress] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Address') }})
    bank_account: Optional[EmployeeEmployeeBankAccount] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BankAccount') }})
    code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Code') }})
    date_of_birth: Optional[date] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DateOfBirth'), 'encoder': utils.dateisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    deactivated: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Deactivated') }})
    directorship_appointment_date: Optional[date] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DirectorshipAppointmentDate'), 'encoder': utils.dateisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    eea_citizen: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EEACitizen') }})
    epm6: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EPM6') }})
    effective_date: Optional[date] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EffectiveDate'), 'encoder': utils.dateisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    employee_partner: Optional[EmployeeEmployeeEmployeePartner] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EmployeePartner') }})
    first_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FirstName') }})
    gender: Optional[EmployeeEmployeeGenderEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Gender') }})
    hours_per_week: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('HoursPerWeek') }})
    initials: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Initials') }})
    irregular_employment: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IrregularEmployment') }})
    is_agency_worker: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IsAgencyWorker') }})
    last_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LastName') }})
    leaver_reason: Optional[EmployeeEmployeeLeaverReasonEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LeaverReason') }})
    leaving_date: Optional[date] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LeavingDate'), 'encoder': utils.dateisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    marital_status: Optional[EmployeeEmployeeMaritalStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MaritalStatus') }})
    meta_data: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MetaData') }})
    middle_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MiddleName') }})
    ni_number: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NiNumber') }})
    nic_liability: Optional[EmployeeEmployeeNicLiabilityEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NicLiability') }})
    off_payroll_worker: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OffPayrollWorker') }})
    on_strike: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OnStrike') }})
    passport_number: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PassportNumber') }})
    pay_schedule: Optional[EmployeeEmployeePaySchedule] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PaySchedule') }})
    payment_method: Optional[EmployeeEmployeePaymentMethodEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PaymentMethod') }})
    payment_to_a_non_individual: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PaymentToANonIndividual') }})
    region: Optional[EmployeeEmployeeRegionEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Region') }})
    revision: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Revision') }})
    rule_exclusions: Optional[EmployeeEmployeeRuleExclusionsEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RuleExclusions') }})
    seconded: Optional[EmployeeEmployeeSecondedEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Seconded') }})
    start_date: Optional[date] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StartDate'), 'encoder': utils.dateisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    starter_declaration: Optional[EmployeeEmployeeStarterDeclarationEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StarterDeclaration') }})
    territory: Optional[EmployeeEmployeeTerritoryEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Territory') }})
    title: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Title') }})
    working_week: Optional[EmployeeEmployeeWorkingWeekEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('WorkingWeek') }})
    

@dataclass_json
@dataclasses.dataclass
class Employee:
    employee: Optional[EmployeeEmployee] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Employee') }})
    
