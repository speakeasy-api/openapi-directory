import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The employers' address
 */
export declare class EmployerEmployerAddress extends SpeakeasyBase {
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
 * The employer auto enrolments' pension
 */
export declare class EmployerEmployerAutoEnrolmentPension extends SpeakeasyBase {
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
 * The employer auto enrolments' primary address
 */
export declare class EmployerEmployerAutoEnrolmentPrimaryAddress extends SpeakeasyBase {
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
 * The employer auto enrolments' secondary address
 */
export declare class EmployerEmployerAutoEnrolmentSecondaryAddress extends SpeakeasyBase {
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
 * The employers' auto enrolment
 */
export declare class EmployerEmployerAutoEnrolment extends SpeakeasyBase {
    /**
     * The employer auto enrolments' pension
     */
    pension?: EmployerEmployerAutoEnrolmentPension;
    /**
     * The employer auto enrolments' postponement date
     */
    postponementDate?: Date;
    /**
     * The employer auto enrolments' primary address
     */
    primaryAddress?: EmployerEmployerAutoEnrolmentPrimaryAddress;
    /**
     * The employer auto enrolments' primary email
     */
    primaryEmail?: string;
    /**
     * The employer auto enrolments' primary first name
     */
    primaryFirstName?: string;
    /**
     * The employer auto enrolments' primary job title
     */
    primaryJobTitle?: string;
    /**
     * The employer auto enrolments' primary last name
     */
    primaryLastName?: string;
    /**
     * The employer auto enrolments' primary telephone
     */
    primaryTelephone?: string;
    /**
     * The employer auto enrolments' re enrolment day offset
     */
    reEnrolmentDayOffset?: number;
    /**
     * The employer auto enrolments' re enrolment month offset
     */
    reEnrolmentMonthOffset?: number;
    /**
     * The employer auto enrolments' recent opt out re enrolment excluded
     */
    recentOptOutReEnrolmentExcluded?: boolean;
    /**
     * The employer auto enrolments' secondary address
     */
    secondaryAddress?: EmployerEmployerAutoEnrolmentSecondaryAddress;
    /**
     * The employer auto enrolments' secondary email
     */
    secondaryEmail?: string;
    /**
     * The employer auto enrolments' secondary first name
     */
    secondaryFirstName?: string;
    /**
     * The employer auto enrolments' secondary job title
     */
    secondaryJobTitle?: string;
    /**
     * The employer auto enrolments' secondary last name
     */
    secondaryLastName?: string;
    /**
     * The employer auto enrolments' secondary telephone
     */
    secondaryTelephone?: string;
    /**
     * The employer auto enrolments' staging date
     */
    stagingDate?: Date;
}
/**
 * The employers' bank account
 */
export declare class EmployerEmployerBankAccount extends SpeakeasyBase {
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
 * The hmrc settingss' sender
 */
export declare enum EmployerEmployerHmrcSettingsSenderEnum {
    Employer = "Employer",
    Individual = "Individual",
    Company = "Company",
    Agent = "Agent",
    Bureau = "Bureau",
    Partnership = "Partnership",
    Trust = "Trust",
    Government = "Government",
    ActingInCapacity = "ActingInCapacity",
    Other = "Other"
}
/**
 * The hmrc settingss' state aid sector
 */
export declare enum EmployerEmployerHmrcSettingsStateAidSectorEnum {
    Agriculture = "Agriculture",
    FisheriesAquaculture = "FisheriesAquaculture",
    RoadTransport = "RoadTransport",
    Industrial = "Industrial",
    NotApplicable = "NotApplicable"
}
/**
 * The employers' hmrc settings
 */
export declare class EmployerEmployerHmrcSettings extends SpeakeasyBase {
    /**
     * The hmrc settingss' accounting office ref
     */
    accountingOfficeRef?: string;
    /**
     * The hmrc settingss' c o t a x ref
     */
    cotaxRef?: string;
    /**
     * The hmrc settingss' contact email
     */
    contactEmail?: string;
    /**
     * The hmrc settingss' contact fax
     */
    contactFax?: string;
    /**
     * The hmrc settingss' contact first name
     */
    contactFirstName?: string;
    /**
     * The hmrc settingss' contact last name
     */
    contactLastName?: string;
    /**
     * The hmrc settingss' contact telephone
     */
    contactTelephone?: string;
    /**
     * The hmrc settingss' employment allowance override
     */
    employmentAllowanceOverride?: number;
    /**
     * The hmrc settingss' password
     */
    password?: string;
    /**
     * The hmrc settingss' s a u t r
     */
    sautr?: string;
    /**
     * The hmrc settingss' sender
     */
    sender?: EmployerEmployerHmrcSettingsSenderEnum;
    /**
     * The hmrc settingss' sender id
     */
    senderId?: string;
    /**
     * The hmrc settingss' state aid sector
     */
    stateAidSector?: EmployerEmployerHmrcSettingsStateAidSectorEnum;
    /**
     * The hmrc settingss' tax office number
     */
    taxOfficeNumber?: string;
    /**
     * The hmrc settingss' tax office reference
     */
    taxOfficeReference?: string;
}
/**
 * The employers' region
 */
export declare enum EmployerEmployerRegionEnum {
    NotSet = "NotSet",
    England = "England",
    Scotland = "Scotland",
    Wales = "Wales"
}
/**
 * The employers' rule exclusions
 */
export declare enum EmployerEmployerRuleExclusionsEnum {
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
 * The employers' territory
 */
export declare enum EmployerEmployerTerritoryEnum {
    UnitedKingdom = "UnitedKingdom"
}
export declare class EmployerEmployer extends SpeakeasyBase {
    /**
     * The employers' address
     */
    address?: EmployerEmployerAddress;
    /**
     * The employers' apprenticeship levy allowance
     */
    apprenticeshipLevyAllowance?: number;
    /**
     * The employers' auto enrolment
     */
    autoEnrolment?: EmployerEmployerAutoEnrolment;
    /**
     * The employers' bacs service user number
     */
    bacsServiceUserNumber?: string;
    /**
     * The employers' bank account
     */
    bankAccount?: EmployerEmployerBankAccount;
    /**
     * The employers' calculate apprenticeship levy
     */
    calculateApprenticeshipLevy?: boolean;
    /**
     * The employers' claim employment allowance
     */
    claimEmploymentAllowance?: boolean;
    /**
     * The employers' claim small employer relief
     */
    claimSmallEmployerRelief?: boolean;
    /**
     * The employers' effective date
     */
    effectiveDate?: Date;
    /**
     * The employers' hmrc settings
     */
    hmrcSettings?: EmployerEmployerHmrcSettings;
    /**
     * The employers' meta data
     */
    metaData?: Record<string, any>;
    /**
     * The employers' name
     */
    name?: string;
    /**
     * The employers' next revision date
     */
    nextRevisionDate?: Date;
    /**
     * The employers' region
     */
    region?: EmployerEmployerRegionEnum;
    /**
     * The employers' revision
     */
    revision?: number;
    /**
     * The employers' rule exclusions
     */
    ruleExclusions?: EmployerEmployerRuleExclusionsEnum;
    /**
     * The employers' territory
     */
    territory?: EmployerEmployerTerritoryEnum;
}
/**
 * The employer object.
 */
export declare class Employer extends SpeakeasyBase {
    employer?: EmployerEmployer;
}
