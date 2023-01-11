import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class StagedEmployeeAdditionalDirectDeposit:
    r"""StagedEmployeeAdditionalDirectDeposit
    The additional direct deposit model
    """
    
    account_number: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accountNumber') }})
    account_type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accountType') }})
    amount: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('amount') }})
    amount_type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('amountType') }})
    is_skip_pre_note: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isSkipPreNote') }})
    pre_note_date: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('preNoteDate') }})
    routing_number: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('routingNumber') }})
    

@dataclass_json
@dataclasses.dataclass
class StagedEmployeeBenefitSetup:
    r"""StagedEmployeeBenefitSetup
    The benefit setup model
    """
    
    benefit_class: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('benefitClass') }})
    benefit_class_effective_date: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('benefitClassEffectiveDate') }})
    benefit_salary: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('benefitSalary') }})
    benefit_salary_effective_date: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('benefitSalaryEffectiveDate') }})
    do_not_apply_administrative_period: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('doNotApplyAdministrativePeriod') }})
    is_measure_aca_eligibility: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isMeasureAcaEligibility') }})
    
class StagedEmployeeCustomBooleanFieldsCategoryEnum(str, Enum):
    PAYROLL_AND_HR = "PayrollAndHR"


@dataclass_json
@dataclasses.dataclass
class StagedEmployeeCustomBooleanFields:
    category: StagedEmployeeCustomBooleanFieldsCategoryEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('category') }})
    label: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('label') }})
    value: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    
class StagedEmployeeCustomDateFieldsCategoryEnum(str, Enum):
    PAYROLL_AND_HR = "PayrollAndHR"


@dataclass_json
@dataclasses.dataclass
class StagedEmployeeCustomDateFields:
    category: StagedEmployeeCustomDateFieldsCategoryEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('category') }})
    label: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('label') }})
    value: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    
class StagedEmployeeCustomDropDownFieldsCategoryEnum(str, Enum):
    PAYROLL_AND_HR = "PayrollAndHR"


@dataclass_json
@dataclasses.dataclass
class StagedEmployeeCustomDropDownFields:
    category: StagedEmployeeCustomDropDownFieldsCategoryEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('category') }})
    label: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('label') }})
    value: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    
class StagedEmployeeCustomNumberFieldsCategoryEnum(str, Enum):
    PAYROLL_AND_HR = "PayrollAndHR"


@dataclass_json
@dataclasses.dataclass
class StagedEmployeeCustomNumberFields:
    category: StagedEmployeeCustomNumberFieldsCategoryEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('category') }})
    label: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('label') }})
    value: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    
class StagedEmployeeCustomTextFieldsCategoryEnum(str, Enum):
    PAYROLL_AND_HR = "PayrollAndHR"


@dataclass_json
@dataclasses.dataclass
class StagedEmployeeCustomTextFields:
    category: StagedEmployeeCustomTextFieldsCategoryEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('category') }})
    label: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('label') }})
    value: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    

@dataclass_json
@dataclasses.dataclass
class StagedEmployeeDepartmentPosition:
    r"""StagedEmployeeDepartmentPosition
    The Department Position model
    """
    
    change_reason: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('changeReason') }})
    clock_badge_number: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clockBadgeNumber') }})
    cost_center1: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('costCenter1') }})
    cost_center2: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('costCenter2') }})
    cost_center3: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('costCenter3') }})
    effective_date: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('effectiveDate') }})
    employee_type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('employeeType') }})
    equal_employment_opportunity_class: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('equalEmploymentOpportunityClass') }})
    is_minimum_wage_exempt: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isMinimumWageExempt') }})
    is_overtime_exempt: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isOvertimeExempt') }})
    is_supervisor_reviewer: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isSupervisorReviewer') }})
    is_union_dues_collected: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isUnionDuesCollected') }})
    is_union_initiation_collected: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isUnionInitiationCollected') }})
    job_title: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('jobTitle') }})
    pay_group: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('payGroup') }})
    position_code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('positionCode') }})
    shift: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('shift') }})
    supervisor_company_number: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('supervisorCompanyNumber') }})
    supervisor_employee_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('supervisorEmployeeId') }})
    tipped: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tipped') }})
    union_affiliation_date: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('unionAffiliationDate') }})
    union_code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('unionCode') }})
    union_position: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('unionPosition') }})
    workers_compensation: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('workersCompensation') }})
    

@dataclass_json
@dataclasses.dataclass
class StagedEmployeeFederalTax:
    r"""StagedEmployeeFederalTax
    The Federal Tax model
    """
    
    amount: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('amount') }})
    deductions_amount: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deductionsAmount') }})
    dependents_amount: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dependentsAmount') }})
    exemptions: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('exemptions') }})
    filing_status: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('filingStatus') }})
    higher_rate: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('higherRate') }})
    other_income_amount: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('otherIncomeAmount') }})
    percentage: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('percentage') }})
    tax_calculation_code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('taxCalculationCode') }})
    w4_form_year: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('w4FormYear') }})
    

@dataclass_json
@dataclasses.dataclass
class StagedEmployeeHomeAddress:
    r"""StagedEmployeeHomeAddress
    The address model
    """
    
    address1: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('address1') }})
    address2: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('address2') }})
    city: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('city') }})
    country: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('country') }})
    county: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('county') }})
    email_address: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('emailAddress') }})
    mobile_phone: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mobilePhone') }})
    phone: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('phone') }})
    postal_code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('postalCode') }})
    state: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    

@dataclass_json
@dataclasses.dataclass
class StagedEmployeeLocalTax:
    r"""StagedEmployeeLocalTax
    The Local Tax model
    """
    
    exemptions: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('exemptions') }})
    exemptions2: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('exemptions2') }})
    filing_status: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('filingStatus') }})
    resident_psd: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('residentPSD') }})
    tax_code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('taxCode') }})
    work_psd: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('workPSD') }})
    

@dataclass_json
@dataclasses.dataclass
class StagedEmployeeMainDirectDeposit:
    r"""StagedEmployeeMainDirectDeposit
    The Main Direct Deposit model
    """
    
    account_number: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accountNumber') }})
    account_type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accountType') }})
    is_skip_pre_note: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isSkipPreNote') }})
    pre_note_date: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('preNoteDate') }})
    routing_number: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('routingNumber') }})
    

@dataclass_json
@dataclasses.dataclass
class StagedEmployeeNonPrimaryStateTax:
    r"""StagedEmployeeNonPrimaryStateTax
    The Non-Primary State Tax model
    """
    
    amount: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('amount') }})
    deductions_amount: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deductionsAmount') }})
    dependents_amount: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dependentsAmount') }})
    exemptions: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('exemptions') }})
    exemptions2: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('exemptions2') }})
    filing_status: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('filingStatus') }})
    higher_rate: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('higherRate') }})
    other_income_amount: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('otherIncomeAmount') }})
    percentage: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('percentage') }})
    reciprocity_code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reciprocityCode') }})
    special_check_calc: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('specialCheckCalc') }})
    tax_calculation_code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('taxCalculationCode') }})
    tax_code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('taxCode') }})
    w4_form_year: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('w4FormYear') }})
    

@dataclass_json
@dataclasses.dataclass
class StagedEmployeePrimaryPayRate:
    r"""StagedEmployeePrimaryPayRate
    The Primary Pay Rate model
    """
    
    base_rate: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('baseRate') }})
    change_reason: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('changeReason') }})
    default_hours: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('defaultHours') }})
    effective_date: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('effectiveDate') }})
    is_auto_pay: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isAutoPay') }})
    pay_frequency: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('payFrequency') }})
    pay_grade: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('payGrade') }})
    pay_type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('payType') }})
    rate_per: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ratePer') }})
    salary: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('salary') }})
    

@dataclass_json
@dataclasses.dataclass
class StagedEmployeePrimaryStateTax:
    r"""StagedEmployeePrimaryStateTax
    The State Tax model
    """
    
    amount: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('amount') }})
    deductions_amount: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deductionsAmount') }})
    dependents_amount: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dependentsAmount') }})
    exemptions: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('exemptions') }})
    exemptions2: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('exemptions2') }})
    filing_status: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('filingStatus') }})
    higher_rate: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('higherRate') }})
    other_income_amount: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('otherIncomeAmount') }})
    percentage: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('percentage') }})
    special_check_calc: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('specialCheckCalc') }})
    tax_calculation_code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('taxCalculationCode') }})
    tax_code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('taxCode') }})
    w4_form_year: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('w4FormYear') }})
    

@dataclass_json
@dataclasses.dataclass
class StagedEmployeeStatus:
    r"""StagedEmployeeStatus
    The employee status model
    """
    
    adjusted_seniority_date: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('adjustedSeniorityDate') }})
    change_reason: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('changeReason') }})
    effective_date: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('effectiveDate') }})
    employee_status: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('employeeStatus') }})
    hire_date: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hireDate') }})
    is_eligible_for_rehire: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isEligibleForRehire') }})
    

@dataclass_json
@dataclasses.dataclass
class StagedEmployeeWebTime:
    r"""StagedEmployeeWebTime
    Add Web Time badge number and charge rate and synchronize Web Pay and Web Time employee data.
    """
    
    badge_number: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('badgeNumber') }})
    charge_rate: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('chargeRate') }})
    is_time_labor_enabled: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isTimeLaborEnabled') }})
    

@dataclass_json
@dataclasses.dataclass
class StagedEmployeeWorkAddress:
    r"""StagedEmployeeWorkAddress
    The address model
    """
    
    address1: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('address1') }})
    address2: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('address2') }})
    city: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('city') }})
    country: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('country') }})
    county: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('county') }})
    email_address: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('emailAddress') }})
    mobile_phone: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mobilePhone') }})
    pager: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pager') }})
    phone: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('phone') }})
    phone_extension: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('phoneExtension') }})
    postal_code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('postalCode') }})
    state: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    

@dataclass_json
@dataclasses.dataclass
class StagedEmployeeWorkEligibility:
    r"""StagedEmployeeWorkEligibility
    The Work Eligibility model
    """
    
    alien_or_admission_document_number: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('alienOrAdmissionDocumentNumber') }})
    attested_date: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('attestedDate') }})
    country_of_issuance: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('countryOfIssuance') }})
    foreign_passport_number: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('foreignPassportNumber') }})
    i94_admission_number: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('i94AdmissionNumber') }})
    i9_date_verified: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('i9DateVerified') }})
    i9_notes: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('i9Notes') }})
    is_i9_verified: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isI9Verified') }})
    is_ssn_verified: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isSsnVerified') }})
    ssn_date_verified: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ssnDateVerified') }})
    ssn_notes: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ssnNotes') }})
    visa_type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('visaType') }})
    work_authorization: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('workAuthorization') }})
    work_until: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('workUntil') }})
    

@dataclass_json
@dataclasses.dataclass
class StagedEmployee:
    r"""StagedEmployee
    The staged employee model
    """
    
    additional_direct_deposit: Optional[list[StagedEmployeeAdditionalDirectDeposit]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('additionalDirectDeposit') }})
    benefit_setup: Optional[list[StagedEmployeeBenefitSetup]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('benefitSetup') }})
    birth_date: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('birthDate') }})
    custom_boolean_fields: Optional[list[StagedEmployeeCustomBooleanFields]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customBooleanFields') }})
    custom_date_fields: Optional[list[StagedEmployeeCustomDateFields]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customDateFields') }})
    custom_drop_down_fields: Optional[list[StagedEmployeeCustomDropDownFields]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customDropDownFields') }})
    custom_number_fields: Optional[list[StagedEmployeeCustomNumberFields]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customNumberFields') }})
    custom_text_fields: Optional[list[StagedEmployeeCustomTextFields]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customTextFields') }})
    department_position: Optional[list[StagedEmployeeDepartmentPosition]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('departmentPosition') }})
    disability_description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('disabilityDescription') }})
    employee_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('employeeId') }})
    ethnicity: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ethnicity') }})
    federal_tax: Optional[list[StagedEmployeeFederalTax]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('federalTax') }})
    first_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('firstName') }})
    fitw_exempt_reason: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fitwExemptReason') }})
    futa_exempt_reason: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('futaExemptReason') }})
    gender: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gender') }})
    home_address: Optional[list[StagedEmployeeHomeAddress]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('homeAddress') }})
    is_employee943: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isEmployee943') }})
    is_smoker: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isSmoker') }})
    last_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastName') }})
    local_tax: Optional[list[StagedEmployeeLocalTax]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('localTax') }})
    main_direct_deposit: Optional[list[StagedEmployeeMainDirectDeposit]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mainDirectDeposit') }})
    marital_status: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maritalStatus') }})
    med_exempt_reason: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('medExemptReason') }})
    middle_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('middleName') }})
    non_primary_state_tax: Optional[list[StagedEmployeeNonPrimaryStateTax]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nonPrimaryStateTax') }})
    preferred_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('preferredName') }})
    primary_pay_rate: Optional[list[StagedEmployeePrimaryPayRate]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('primaryPayRate') }})
    primary_state_tax: Optional[list[StagedEmployeePrimaryStateTax]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('primaryStateTax') }})
    prior_last_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('priorLastName') }})
    salutation: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('salutation') }})
    sitw_exempt_reason: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sitwExemptReason') }})
    ss_exempt_reason: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ssExemptReason') }})
    ssn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ssn') }})
    status: Optional[list[StagedEmployeeStatus]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    suffix: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('suffix') }})
    sui_exempt_reason: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('suiExemptReason') }})
    sui_state: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('suiState') }})
    tax_distribution_code1099_r: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('taxDistributionCode1099R') }})
    tax_form: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('taxForm') }})
    veteran_description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('veteranDescription') }})
    web_time: Optional[StagedEmployeeWebTime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('webTime') }})
    work_address: Optional[list[StagedEmployeeWorkAddress]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('workAddress') }})
    work_eligibility: Optional[list[StagedEmployeeWorkEligibility]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('workEligibility') }})
    
