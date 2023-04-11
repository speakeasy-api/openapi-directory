import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The employees' a e assessment override
 */
export declare enum EmployeeEmployeeAEAssessmentOverrideEnum {
    None = "None",
    OptOut = "OptOut",
    OptIn = "OptIn",
    VoluntaryJoiner = "VoluntaryJoiner",
    ContractualPension = "ContractualPension",
    CeasedMembership = "CeasedMembership",
    Leaver = "Leaver",
    Excluded = "Excluded"
}
/**
 * The employees' a e exclusion reason code
 */
export declare enum EmployeeEmployeeAEExclusionReasonCodeEnum {
    OtherNotKnown = "OtherNotKnown",
    NotAWorker = "NotAWorker",
    NotUKWorker = "NotUKWorker",
    TemporaryUKWorker = "TemporaryUKWorker",
    OutsideAgeRange = "OutsideAgeRange",
    SingleEmployeeDirector = "SingleEmployeeDirector",
    CeasedMembershipWithin12Months = "CeasedMembershipWithin12Months",
    CeasedMembershipBeyond12Months = "CeasedMembershipBeyond12Months",
    WorkerWULSWithin12Month = "WorkerWULSWithin12Month",
    WorkerWULSBeyond12Month = "WorkerWULSBeyond12Month",
    WorkerInNoticePeriod = "WorkerInNoticePeriod",
    WorkerTaxProtection = "WorkerTaxProtection"
}
/**
 * The employees' address
 */
export declare class EmployeeEmployeeAddress extends SpeakeasyBase {
    /**
     * The addresss' line 1
     */
    address1?: string;
    /**
     * The addresss' line 2
     */
    address2?: string;
    /**
     * The addresss' line 3
     */
    address3?: string;
    /**
     * The addresss' line 4
     */
    address4?: string;
    /**
     * The addresss' country
     */
    country?: string;
    /**
     * The addresss' postcode
     */
    postcode?: string;
}
/**
 * The employees' bank account
 */
export declare class EmployeeEmployeeBankAccount extends SpeakeasyBase {
    /**
     * The bank accounts' account name
     */
    accountName?: string;
    /**
     * The bank accounts' account number
     */
    accountNumber?: string;
    /**
     * The bank accounts' branch name
     */
    branchName?: string;
    /**
     * The bank accounts' reference
     */
    reference?: string;
    /**
     * The bank accounts' sort code
     */
    sortCode?: string;
}
/**
 * The employees' employee partner
 */
export declare class EmployeeEmployeeEmployeePartner extends SpeakeasyBase {
    /**
     * The employee partners' first name
     */
    firstName?: string;
    /**
     * The employee partners' initials
     */
    initials?: string;
    /**
     * The employee partners' last name
     */
    lastName?: string;
    /**
     * The employee partners' middle name
     */
    middleName?: string;
    /**
     * The employee partners' ni number
     */
    niNumber?: string;
}
/**
 * The employees' gender
 */
export declare enum EmployeeEmployeeGenderEnum {
    Unknown = "Unknown",
    Male = "Male",
    Female = "Female"
}
/**
 * The employees' leaver reason
 */
export declare enum EmployeeEmployeeLeaverReasonEnum {
    Resigned = "Resigned",
    Dismissed = "Dismissed",
    Redundant = "Redundant",
    Retired = "Retired",
    Deceased = "Deceased",
    LegalCustody = "LegalCustody",
    Other = "Other"
}
/**
 * The employees' marital status
 */
export declare enum EmployeeEmployeeMaritalStatusEnum {
    NotSet = "NotSet",
    Single = "Single",
    Married = "Married",
    Divorced = "Divorced",
    Widowed = "Widowed"
}
/**
 * The employees' nic liability
 */
export declare enum EmployeeEmployeeNicLiabilityEnum {
    HasOtherJob = "HasOtherJob",
    IsFemaleEntitledToReducedRate = "IsFemaleEntitledToReducedRate",
    IsNotLiable = "IsNotLiable",
    IsContractedOut = "IsContractedOut",
    IsFullyLiable = "IsFullyLiable",
    IsApprentice = "IsApprentice",
    LeaverBeyond6Weeks = "LeaverBeyond6Weeks",
    PaymentAfterLeavingIrregular = "PaymentAfterLeavingIrregular",
    IsFreePortWorker = "IsFreePortWorker",
    IsNotLiableForEmployerNi = "IsNotLiableForEmployerNi"
}
/**
 * The employees' pay schedule
 */
export declare class EmployeeEmployeePaySchedule extends SpeakeasyBase {
    /**
     * The links' href
     */
    atHref?: string;
    /**
     * The links' target type
     */
    atRel?: string;
    /**
     * The links' title
     */
    atTitle?: string;
}
/**
 * The employees' payment method
 */
export declare enum EmployeeEmployeePaymentMethodEnum {
    NotSet = "NotSet",
    Cash = "Cash",
    Cheque = "Cheque",
    Bacs = "BACS",
    FasterPayments = "FasterPayments",
    Other = "Other"
}
/**
 * The employees' region
 */
export declare enum EmployeeEmployeeRegionEnum {
    NotSet = "NotSet",
    England = "England",
    Scotland = "Scotland",
    Wales = "Wales"
}
/**
 * The employees' rule exclusions
 */
export declare enum EmployeeEmployeeRuleExclusionsEnum {
    None = "None",
    NiMissingPayInstructionRule = "NiMissingPayInstructionRule",
    TaxMissingPayInstructionRule = "TaxMissingPayInstructionRule",
    TaxCodeUpliftRule = "TaxCodeUpliftRule",
    NiSetExpectedLetterRule = "NiSetExpectedLetterRule",
    NiDateOfBirthChangeRetrospectiveCRule = "NiDateOfBirthChangeRetrospectiveCRule",
    NiDefermentStatusChangeRule = "NiDefermentStatusChangeRule",
    NiEndContractedOutTransferRule = "NiEndContractedOutTransferRule",
    PaymentAfterLeavingTaxCodeRule = "PaymentAfterLeavingTaxCodeRule",
    LeaverEndInstructionsRule = "LeaverEndInstructionsRule",
    P45StudentLoanInstructionRule = "P45StudentLoanInstructionRule",
    P45TaxInstructionRule = "P45TaxInstructionRule",
    P45YtdTaxRule = "P45YtdTaxRule",
    YtdInstructionRule = "YtdInstructionRule",
    TaxCodeRegionChangeRule = "TaxCodeRegionChangeRule",
    AutoEnrolmentStatusChangeRule = "AutoEnrolmentStatusChangeRule",
    EmployeeDeceasedRule = "EmployeeDeceasedRule",
    BenefitInstructionAutoEndRule = "BenefitInstructionAutoEndRule"
}
/**
 * The employees' seconded
 */
export declare enum EmployeeEmployeeSecondedEnum {
    NotSet = "NotSet",
    Stay183DaysOrMore = "Stay183DaysOrMore",
    StayLessThan183Days = "StayLessThan183Days",
    InOutUk = "InOutUk"
}
/**
 * The employees' starter declaration
 */
export declare enum EmployeeEmployeeStarterDeclarationEnum {
    PreviouslyReported = "PreviouslyReported",
    A = "A",
    B = "B",
    C = "C"
}
/**
 * The employees' territory
 */
export declare enum EmployeeEmployeeTerritoryEnum {
    UnitedKingdom = "UnitedKingdom"
}
/**
 * The employees' working week
 */
export declare enum EmployeeEmployeeWorkingWeekEnum {
    None = "None",
    Monday = "Monday",
    Tuesday = "Tuesday",
    Wednesday = "Wednesday",
    Thursday = "Thursday",
    Friday = "Friday",
    AllWeekDays = "AllWeekDays",
    Saturday = "Saturday",
    Sunday = "Sunday",
    AllDays = "AllDays"
}
export declare class EmployeeEmployee extends SpeakeasyBase {
    /**
     * The employees' a e assessment override
     */
    aeAssessmentOverride?: EmployeeEmployeeAEAssessmentOverrideEnum;
    /**
     * The employees' a e assessment override date
     */
    aeAssessmentOverrideDate?: Date;
    /**
     * The employees' a e exclusion reason code
     */
    aeExclusionReasonCode?: EmployeeEmployeeAEExclusionReasonCodeEnum;
    /**
     * The employees' a e postponement date
     */
    aePostponementDate?: Date;
    /**
     * The employees' address
     */
    address?: EmployeeEmployeeAddress;
    /**
     * The employees' bank account
     */
    bankAccount?: EmployeeEmployeeBankAccount;
    /**
     * The employees' code
     */
    code?: string;
    /**
     * The employees' date of birth
     */
    dateOfBirth?: Date;
    /**
     * The employees' deactivated
     */
    deactivated?: boolean;
    /**
     * The employees' directorship appointment date
     */
    directorshipAppointmentDate?: Date;
    /**
     * The employees' e e a citizen
     */
    eeaCitizen?: boolean;
    /**
     * The employees' e p m6
     */
    epm6?: boolean;
    /**
     * The employees' effective date
     */
    effectiveDate?: Date;
    /**
     * The employees' employee partner
     */
    employeePartner?: EmployeeEmployeeEmployeePartner;
    /**
     * The employees' the first name
     */
    firstName?: string;
    /**
     * The employees' gender
     */
    gender?: EmployeeEmployeeGenderEnum;
    /**
     * The employees' hours per week
     */
    hoursPerWeek?: number;
    /**
     * The employees' initials
     */
    initials?: string;
    /**
     * The employees' irregular employment
     */
    irregularEmployment?: boolean;
    /**
     * The employees' is agency worker
     */
    isAgencyWorker?: boolean;
    /**
     * The employees' last name
     */
    lastName?: string;
    /**
     * The employees' leaver reason
     */
    leaverReason?: EmployeeEmployeeLeaverReasonEnum;
    /**
     * The employees' leaving date
     */
    leavingDate?: Date;
    /**
     * The employees' marital status
     */
    maritalStatus?: EmployeeEmployeeMaritalStatusEnum;
    /**
     * The employees' meta data
     */
    metaData?: Record<string, any>;
    /**
     * The employees' middle name
     */
    middleName?: string;
    /**
     * The employees' next revision date
     */
    nextRevisionDate?: Date;
    /**
     * The employees' ni number
     */
    niNumber?: string;
    /**
     * The employees' nic liability
     */
    nicLiability?: EmployeeEmployeeNicLiabilityEnum;
    /**
     * The employees' off payroll worker
     */
    offPayrollWorker?: boolean;
    /**
     * The employees' on strike
     */
    onStrike?: boolean;
    /**
     * The employees' p45 issued date
     */
    p45IssuedDate?: Date;
    /**
     * The employees' passport number
     */
    passportNumber?: string;
    /**
     * The employees' pay schedule
     */
    paySchedule?: EmployeeEmployeePaySchedule;
    /**
     * The employees' payment method
     */
    paymentMethod?: EmployeeEmployeePaymentMethodEnum;
    /**
     * The employees' payment to a non individual
     */
    paymentToANonIndividual?: boolean;
    /**
     * The employees' region
     */
    region?: EmployeeEmployeeRegionEnum;
    /**
     * The employees' revision
     */
    revision?: number;
    /**
     * The employees' rule exclusions
     */
    ruleExclusions?: EmployeeEmployeeRuleExclusionsEnum;
    /**
     * The employees' seconded
     */
    seconded?: EmployeeEmployeeSecondedEnum;
    /**
     * The employees' start date
     */
    startDate?: Date;
    /**
     * The employees' starter declaration
     */
    starterDeclaration?: EmployeeEmployeeStarterDeclarationEnum;
    /**
     * The employees' territory
     */
    territory?: EmployeeEmployeeTerritoryEnum;
    /**
     * The employees' title
     */
    title?: string;
    /**
     * The employees' veteran period start date
     */
    veteranPeriodStartDate?: Date;
    /**
     * The employees' working week
     */
    workingWeek?: EmployeeEmployeeWorkingWeekEnum;
}
/**
 * The employee object.
 */
export declare class Employee extends SpeakeasyBase {
    employee?: EmployeeEmployee;
}
