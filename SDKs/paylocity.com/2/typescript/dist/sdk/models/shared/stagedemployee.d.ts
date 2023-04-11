import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The additional direct deposit model
 */
export declare class StagedEmployeeAdditionalDirectDeposit extends SpeakeasyBase {
    /**
     * Account number, entered without special characters and spaces. <br  />Max length: 17<br />
     */
    accountNumber?: string;
    /**
     * Account type. Valid values are *C* (Checking), *S* (Saving), *P* (Pay Card). <br   />Max length: 1<br />
     */
    accountType?: string;
    /**
     * Amount value to be deposited to the account.<br  />Decimal (12,2)<br />
     */
    amount?: number;
    /**
     * Amount type to indicate the context of the amount. Common values are *F* (FLAT), *F-* (Net Minus), *P* (Percent). <br  /> Max length: 5<br />
     */
    amountType?: string;
    /**
     * Indicates if account will not pre-note.<br />
     */
    isSkipPreNote?: boolean;
    /**
     * Date to end the pre-note of the account. Common formats include *MM-DD-CCYY*, *CCYY-MM-DD*.<br />
     */
    preNoteDate?: string;
    /**
     * ABA Transit Routing Number, entered without dashes or spaces. <br  />Max length: 9<br />
     */
    routingNumber?: string;
}
/**
 * The benefit setup model
 */
export declare class StagedEmployeeBenefitSetup extends SpeakeasyBase {
    /**
     * Benefit Class code. Values are configured in Web Pay Company > Setup > Benefits > Classes.<br  />Max length: 30
     */
    benefitClass?: string;
    /**
     * Date when Benefit Class takes effect. Common formats include *MM-DD-CCYY*, *CCYY-MM-DD*.
     */
    benefitClassEffectiveDate?: string;
    /**
     * Salary used to configure benefits.<br  />Decimal(12,2)
     */
    benefitSalary?: number;
    /**
     * Date when Benefit Salary takes effect. Common formats include *MM-DD-CCYY*, *CCYY-MM-DD*.
     */
    benefitSalaryEffectiveDate?: string;
    /**
     * Applicable only for ACA Enhanced clients and Benefit Classes with ACA Employment Type of Full Time.
     */
    doNotApplyAdministrativePeriod?: boolean;
    /**
     * Only valid for ACA Enhanced clients and Benefit Classes that are ACA Employment Type of Full Time.
     */
    isMeasureAcaEligibility?: boolean;
}
/**
 * The custom field category.  Acceptable value is 'PayrollAndHR'.
 */
export declare enum StagedEmployeeCustomBooleanFieldsCategoryEnum {
    PayrollAndHR = "PayrollAndHR"
}
export declare class StagedEmployeeCustomBooleanFields extends SpeakeasyBase {
    /**
     * The custom field category.  Acceptable value is 'PayrollAndHR'.
     */
    category: StagedEmployeeCustomBooleanFieldsCategoryEnum;
    /**
     * The custom field label whose value is to be added/updated. Must match to the label defined in Web Pay Custom Fields setup.  Max length: 255.
     */
    label: string;
    /**
     * The custom boolean field value.
     */
    value: boolean;
}
/**
 * The custom field category.  Acceptable value is 'PayrollAndHR'.
 */
export declare enum StagedEmployeeCustomDateFieldsCategoryEnum {
    PayrollAndHR = "PayrollAndHR"
}
export declare class StagedEmployeeCustomDateFields extends SpeakeasyBase {
    /**
     * The custom field category.  Acceptable value is 'PayrollAndHR'.
     */
    category: StagedEmployeeCustomDateFieldsCategoryEnum;
    /**
     * The custom field label whose value is to be added/updated.  Must match to the label defined in Web Pay Custom Fields setup.  Max length: 255.
     */
    label: string;
    /**
     * The custom date field value.  Common formats include MM-DD-CCYY, CCYY-MM-DD.
     */
    value: string;
}
/**
 * The custom field category.  Acceptable value is 'PayrollAndHR'.
 */
export declare enum StagedEmployeeCustomDropDownFieldsCategoryEnum {
    PayrollAndHR = "PayrollAndHR"
}
export declare class StagedEmployeeCustomDropDownFields extends SpeakeasyBase {
    /**
     * The custom field category.  Acceptable value is 'PayrollAndHR'.
     */
    category: StagedEmployeeCustomDropDownFieldsCategoryEnum;
    /**
     * The custom field label whose value is to be added/updated.  Must match to the label defined in Web Pay Custom Fields setup.  Max length: 255.
     */
    label: string;
    /**
     * The custom dropdown field value.  Values are configured in Web Pay Company > Setup > List Values > Lookup Values > Custom Fields: PayrollAndHR.  Max length: 10.
     */
    value: string;
}
/**
 * The custom field category.  Acceptable value is 'PayrollAndHR'.
 */
export declare enum StagedEmployeeCustomNumberFieldsCategoryEnum {
    PayrollAndHR = "PayrollAndHR"
}
export declare class StagedEmployeeCustomNumberFields extends SpeakeasyBase {
    /**
     * The custom field category.  Acceptable value is 'PayrollAndHR'.
     */
    category: StagedEmployeeCustomNumberFieldsCategoryEnum;
    /**
     * The custom field label whose value is to be added/updated.  Must match to the label defined in Web Pay Custom Fields setup.  Max length: 255.
     */
    label: string;
    /**
     * The custom number field value.  Decimal (18,6).
     */
    value: number;
}
/**
 * The custom field category.  Acceptable value is 'PayrollAndHR'.
 */
export declare enum StagedEmployeeCustomTextFieldsCategoryEnum {
    PayrollAndHR = "PayrollAndHR"
}
export declare class StagedEmployeeCustomTextFields extends SpeakeasyBase {
    /**
     * The custom field category.  Acceptable value is 'PayrollAndHR'.
     */
    category: StagedEmployeeCustomTextFieldsCategoryEnum;
    /**
     * The custom field label whose value is to be added/updated.  Must match to the label defined in Web Pay Custom Fields setup.  Max length: 255.
     */
    label: string;
    /**
     * The custom text field value.  Max length: 255.
     */
    value: string;
}
/**
 * The Department Position model
 */
export declare class StagedEmployeeDepartmentPosition extends SpeakeasyBase {
    /**
     * Employee department/position change reason. Must match Company setup. <br  />Max length: 15
     */
    changeReason?: string;
    /**
     * Employee clock badge number. Defaults to employeeId. <br  />Max length: 10
     */
    clockBadgeNumber?: string;
    /**
     * Employer defined location, like *branch, division, department*, etc. Must match Company setup. <br  />Max length: 10
     */
    costCenter1?: string;
    /**
     * Employer defined location, like *branch, division, department*, etc. Must match Company setup. <br  />Max length: 10
     */
    costCenter2?: string;
    /**
     * Employer defined location, like *branch, division, department*, etc. Must match Company setup. <br  />Max length: 10
     */
    costCenter3?: string;
    /**
     * The date the position takes effect. Common formats include *MM-DD-CCYY*, *CCYY-MM-DD*.
     */
    effectiveDate?: string;
    /**
     * Employee current employment type. Common values *RFT (Regular Full Time), RPT (Regular Part Time), SNL (Seasonal), TFT (Temporary Full Time), TPT (Temporary Part Time)*. <br  />Max length: 10
     */
    employeeType?: string;
    /**
     * Values are configured in Company > Setup > HR > EEO Classes.<br  /> Max length: 10
     */
    equalEmploymentOpportunityClass?: string;
    /**
     * Indicates if employee is exempt from minimum wage.
     */
    isMinimumWageExempt?: boolean;
    /**
     * Indicates if employee is exempt from overtime.
     */
    isOvertimeExempt?: boolean;
    /**
     * Indicates if employee is a supervisor or reviewer.
     */
    isSupervisorReviewer?: boolean;
    /**
     * Indicates if union dues are collected.
     */
    isUnionDuesCollected?: boolean;
    /**
     * Indicates if initiations fees are collected.
     */
    isUnionInitiationCollected?: boolean;
    /**
     * Employee current job title. <br  />Max length: 50
     */
    jobTitle?: string;
    /**
     * Employee pay group. Must match Company setup. <br  /> Max length: 20
     */
    payGroup?: string;
    /**
     * Employee position code. Must match Company setup.<br  />Max length: 20
     */
    positionCode?: string;
    /**
     * Employee work shift.<br  />Max length: 255
     */
    shift?: string;
    /**
     * Supervisor's company number. Defaults to employee company number.<br  />Max length: 9
     */
    supervisorCompanyNumber?: string;
    /**
     * EmployeeId of the supervisor. <br  />Max length: 10
     */
    supervisorEmployeeId?: string;
    /**
     * Indicates if employee receives tips.
     */
    tipped?: string;
    /**
     * Employee union affiliation effective date. Common formats include *MM-DD-CCYY*, *CCYY-MM-DD*.
     */
    unionAffiliationDate?: string;
    /**
     * Employee union code. Must match Company setup. <br  />Max length: 10
     */
    unionCode?: string;
    /**
     * Employee union position. Must match Company setup. <br  />Max length: 30
     */
    unionPosition?: string;
    /**
     * Employee worker compensation code. Must match Company setup.<br  /> Max length: 10
     */
    workersCompensation?: string;
}
/**
 * The Federal Tax model
 */
export declare class StagedEmployeeFederalTax extends SpeakeasyBase {
    /**
     * Tax amount. <br  />Decimal (12,2)
     */
    amount?: number;
    /**
     * Box 4(b) on form W4 (year 2020 or later): Deductions amount. <br  />Decimal (12,2)
     */
    deductionsAmount?: number;
    /**
     * Box 3 on form W4 (year 2020 or later): Total dependents amount. <br  />Decimal (12,2)
     */
    dependentsAmount?: number;
    /**
     * Federal tax exemptions value. <br  />Decimal (12,2)
     */
    exemptions?: number;
    /**
     * Employee federal filing status. Common values are *S* (Single), *M* (Married).<br  />Max length: 50
     */
    filingStatus?: string;
    /**
     * Box 2(c) on form W4 (year 2020 or later): Multiple Jobs or Spouse Works. <br  />Boolean
     */
    higherRate?: boolean;
    /**
     * Box 4(a) on form W4 (year 2020 or later): Other income amount. <br  />Decimal (12,2)
     */
    otherIncomeAmount?: number;
    /**
     * Tax percentage. <br  />Decimal (12,2)
     */
    percentage?: number;
    /**
     * Tax calculation code. Common values are *F* (Flat), *P* (Percentage), *FDFP* (Flat Dollar Amount plus Fixed Percentage). <br  />Max length: 10
     */
    taxCalculationCode?: string;
    /**
     * The federal W4 form year <br  />Integer
     */
    w4FormYear?: number;
}
/**
 * The address model
 */
export declare class StagedEmployeeHomeAddress extends SpeakeasyBase {
    /**
     * 1st address line.<br  /> Max length: 40
     */
    address1?: string;
    /**
     * 2nd address line. <br  /> Max length: 40
     */
    address2?: string;
    /**
     * City.<br  /> Max length: 40
     */
    city?: string;
    /**
     * Country.<br  /> Max length: 30
     */
    country?: string;
    /**
     * County.<br  /> Max length: 30
     */
    county?: string;
    /**
     * Email. <br  />Max length: 50
     */
    emailAddress?: string;
    /**
     * Mobile phone number.<br  /> Max length: 12
     */
    mobilePhone?: string;
    /**
     * Phone number.<br  /> Max length: 12
     */
    phone?: string;
    /**
     * Postal code.<br  /> Max length: 10
     */
    postalCode?: string;
    /**
     * State or province.<br  /> Max length: 2
     */
    state?: string;
}
/**
 * The Local Tax model
 */
export declare class StagedEmployeeLocalTax extends SpeakeasyBase {
    /**
     * Local tax exemptions value.<br  />Decimal (12,2)
     */
    exemptions?: number;
    /**
     * Local tax exemptions 2 value.<br  />Decimal (12,2)
     */
    exemptions2?: number;
    /**
     * Employee local tax filing status. Must match specific local tax setup. <br  /> Max length: 50
     */
    filingStatus?: string;
    /**
     * Resident PSD (political subdivision code) applicable in PA. Must match Company setup.<br  /> Max length: 9
     */
    residentPSD?: string;
    /**
     * Local tax code.<br  />Max length: 50
     */
    taxCode?: string;
    /**
     * Work location PSD. Must match Company setup. <br  /> Max length: 9
     */
    workPSD?: string;
}
/**
 * The Main Direct Deposit model
 */
export declare class StagedEmployeeMainDirectDeposit extends SpeakeasyBase {
    /**
     * Account number, entered without special characters and spaces. <br  />Max length: 17
     */
    accountNumber?: string;
    /**
     * Account type. Valid values are *C* (Checking), *S* (Saving), *P* (Pay Card). <br   />Max length: 1
     */
    accountType?: string;
    /**
     * Indicates if account will not pre-note.
     */
    isSkipPreNote?: boolean;
    /**
     * Date to end the pre-note of the account. Common formats include *MM-DD-CCYY*, *CCYY-MM-DD*.
     */
    preNoteDate?: string;
    /**
     * ABA Transit Routing Number, entered without dashes or spaces. <br  />Max length: 9
     */
    routingNumber?: string;
}
/**
 * The Non-Primary State Tax model
 */
export declare class StagedEmployeeNonPrimaryStateTax extends SpeakeasyBase {
    /**
     * State tax code.<br  /> Max length: 50
     */
    amount?: number;
    /**
     * Box 4(b) on form W4 (year 2020 or later): Deductions amount. <br  />Decimal (12,2)
     */
    deductionsAmount?: number;
    /**
     * Box 3 on form W4 (year 2020 or later): Total dependents amount. <br  />Decimal (12,2)
     */
    dependentsAmount?: number;
    /**
     * State tax exemptions value.<br  />Decimal (12,2)
     */
    exemptions?: number;
    /**
     * State tax exemptions 2 value.<br  />Decimal (12,2)
     */
    exemptions2?: number;
    /**
     * Employee state tax filing status. Common values are *S* (Single), *M* (Married).<br  />Max length: 50
     */
    filingStatus?: string;
    /**
     * Box 2(c) on form W4 (year 2020 or later): Multiple Jobs or Spouse Works. <br  />Boolean
     */
    higherRate?: boolean;
    /**
     * Box 4(a) on form W4 (year 2020 or later): Other income amount. <br  />Decimal (12,2)
     */
    otherIncomeAmount?: number;
    /**
     * State Tax percentage. <br  />Decimal (12,2)
     */
    percentage?: number;
    /**
     * Non-primary state tax reciprocity code.<br  /> Max length: 50
     */
    reciprocityCode?: string;
    /**
     * Supplemental check calculation code. Common values are *Blocked* (Taxes blocked on Supplemental checks), *Supp* (Use supplemental Tax Rate-Code). <br  />Max length: 10
     */
    specialCheckCalc?: string;
    /**
     * Tax calculation code. Common values are *F* (Flat), *P* (Percentage), *FDFP* (Flat Dollar Amount plus Fixed Percentage). <br  />Max length: 10
     */
    taxCalculationCode?: string;
    /**
     * State tax code.<br  /> Max length: 50
     */
    taxCode?: string;
    /**
     * The state W4 form year <br  />Integer
     */
    w4FormYear?: number;
}
/**
 * The Primary Pay Rate model
 */
export declare class StagedEmployeePrimaryPayRate extends SpeakeasyBase {
    /**
     * Employee base rate, used for Hourly employees. <br  />Decimal (12,2)
     */
    baseRate?: number;
    /**
     * Pay rate change reason.<br  /> Max length: 30
     */
    changeReason?: string;
    /**
     * Employee default hours consistently worked. If autoPayType is set to D, employee will be paid hourly base rate for the defaultHours. <br  />Decimal (12,2)
     */
    defaultHours?: number;
    /**
     * The date the employee's pay rate takes effect. Common formats include *MM-DD-CCYY*, *CCYY-MM-DD*.
     */
    effectiveDate?: string;
    /**
     * If set to *True*, employee will be paid automatically using deafultHours.
     */
    isAutoPay?: boolean;
    /**
     * Employee current pay frequency. Common values are *A (Annual), B (Bi-Weekly), D (Daily), M (Monthly), S (Semi-Monthly), Q (Quarterly), W (Weekly)*. <br  />Max length: 5
     */
    payFrequency?: string;
    /**
     * Employee pay grade. Must match Company setup. <br  /> Max length: 10
     */
    payGrade?: string;
    /**
     * Employee pay type (rate code). Valid values are *Hourly* or *Salary*. <br  />Max length: 10
     */
    payType?: string;
    /**
     * Employee base rate frequency used with payType Hourly. Common values are *Hour, Week*. Default is Hour. <br  />Max length: 10
     */
    ratePer?: string;
    /**
     * Employee gross salary per pay period used with payType Salary.<br  />Decimal (12,6)
     */
    salary?: number;
}
/**
 * The State Tax model
 */
export declare class StagedEmployeePrimaryStateTax extends SpeakeasyBase {
    /**
     * State tax code.<br  /> Max length: 50
     */
    amount?: number;
    /**
     * Box 4(b) on form W4 (year 2020 or later): Deductions amount. <br  />Decimal (12,2)
     */
    deductionsAmount?: number;
    /**
     * Box 3 on form W4 (year 2020 or later): Total dependents amount. <br  />Decimal (12,2)
     */
    dependentsAmount?: number;
    /**
     * State tax exemptions value.<br  />Decimal (12,2)
     */
    exemptions?: number;
    /**
     * State tax exemptions 2 value.<br  />Decimal (12,2)
     */
    exemptions2?: number;
    /**
     * Employee state tax filing status. Common values are *S* (Single), *M* (Married).<br  />Max length: 50
     */
    filingStatus?: string;
    /**
     * Box 2(c) on form W4 (year 2020 or later): Multiple Jobs or Spouse Works. <br  />Boolean
     */
    higherRate?: boolean;
    /**
     * Box 4(a) on form W4 (year 2020 or later): Other income amount. <br  />Decimal (12,2)
     */
    otherIncomeAmount?: number;
    /**
     * State Tax percentage. <br  />Decimal (12,2)
     */
    percentage?: number;
    /**
     * Supplemental check calculation code. Common values are *Blocked* (Taxes blocked on Supplemental checks), *Supp* (Use supplemental Tax Rate-Code). <br  />Max length: 10
     */
    specialCheckCalc?: string;
    /**
     * Tax calculation code. Common values are *F* (Flat), *P* (Percentage), *FDFP* (Flat Dollar Amount plus Fixed Percentage). <br  />Max length: 10
     */
    taxCalculationCode?: string;
    /**
     * State tax code.<br  /> Max length: 50
     */
    taxCode?: string;
    /**
     * The state W4 form year <br  />Integer
     */
    w4FormYear?: number;
}
/**
 * The employee status model
 */
export declare class StagedEmployeeStatus extends SpeakeasyBase {
    /**
     * Adjusted seniority date. Common formats include *MM-DD-CCYY*, *CCYY-MM-DD*.
     */
    adjustedSeniorityDate?: string;
    /**
     * Employee status change reason. Must match Company setup.<br  /> Max length: 15
     */
    changeReason?: string;
    /**
     * Common formats include *MM-DD-CCYY*, *CCYY-MM-DD*.
     */
    effectiveDate?: string;
    /**
     * Employee current work status. Common values are *A* (Active), *L* (Leave of Absence), *T* (Terminated). <br  />Max length: 20
     */
    employeeStatus?: string;
    /**
     * Employee hired date. Common formats include *MM-DD-CCYY*, *CCYY-MM-DD*.
     */
    hireDate?: string;
    /**
     * Indicates if employee eligible for rehire.
     */
    isEligibleForRehire?: boolean;
}
/**
 * Add Web Time badge number and charge rate and synchronize Web Pay and Web Time employee data.
 */
export declare class StagedEmployeeWebTime extends SpeakeasyBase {
    /**
     * Badge number usually issued for time and attendance system use. <br  />Max length: 50
     */
    badgeNumber?: string;
    /**
     * Rate to be charged to third party for time worked by the employee. It is most commonly referenced in the Cost Center Charge, Cost Center Charge vs. Cost Reports, and the Customer Invoice time and attendance reports. <br  />Decimal (12,2)
     */
    chargeRate?: number;
    /**
     * If set to true, changes to employee data will be reflected in Web Time.
     */
    isTimeLaborEnabled?: boolean;
}
/**
 * The address model
 */
export declare class StagedEmployeeWorkAddress extends SpeakeasyBase {
    /**
     * 1st address line.<br  /> Max length: 40
     */
    address1?: string;
    /**
     * 2nd address line. <br  /> Max length: 40
     */
    address2?: string;
    /**
     * City.<br  /> Max length: 40
     */
    city?: string;
    /**
     * Country.<br  /> Max length: 30
     */
    country?: string;
    /**
     * County.<br  /> Max length: 30
     */
    county?: string;
    /**
     * Email. <br  />Max length: 50
     */
    emailAddress?: string;
    /**
     * Mobile phone number.<br  /> Max length: 12
     */
    mobilePhone?: string;
    /**
     * Employee pager number.<br  /> Max length: 20
     */
    pager?: string;
    /**
     * Phone number.<br  /> Max length: 12
     */
    phone?: string;
    /**
     * Phone number extension.<br  /> Max length: 10
     */
    phoneExtension?: string;
    /**
     * Postal code.<br  /> Max length: 10
     */
    postalCode?: string;
    /**
     * State or province.<br  /> Max length: 2
     */
    state?: string;
}
/**
 * The Work Eligibility model
 */
export declare class StagedEmployeeWorkEligibility extends SpeakeasyBase {
    /**
     * Employee USCIS or Admission Number. <br  /> Must be 7-10 characters and may begin with an 'A'
     */
    alienOrAdmissionDocumentNumber?: string;
    /**
     * The date the I-9 Verification form was attested by Employer or Authorized representative. Common formats are *MM-DD-CCYY, CCYY-MM-DD*.
     */
    attestedDate?: string;
    /**
     * If Foreign Passport number is provided, provide its country of issuance. Must match Paylocity setup.<br  /> Max length: 30
     */
    countryOfIssuance?: string;
    /**
     * Foreign Passport Number.<br  /> Max length: 50
     */
    foreignPassportNumber?: string;
    /**
     * Form I-94 admission number.<br  /> Must be 11 numeric characters
     */
    i94AdmissionNumber?: string;
    /**
     * Common formats include *MM-DD-CCYY*, *CCYY-MM-DD*.
     */
    i9DateVerified?: string;
    /**
     * Notes regarding employee's i9.<br  /> Max length: 4000
     */
    i9Notes?: string;
    /**
     * Indicates if employee I9 is verified.
     */
    isI9Verified?: boolean;
    /**
     * Indicates if employee SSN is verified.
     */
    isSsnVerified?: boolean;
    /**
     * The date of employer verification of employee SSN. Common formats include *MM-DD-CCYY*, *CCYY-MM-DD*.
     */
    ssnDateVerified?: string;
    /**
     * Notes regarding employee's SSN.<br  /> Max length: 4000
     */
    ssnNotes?: string;
    /**
     * Employee Visa type. Must match one of the system coded values.<br  /> Max length: 100
     */
    visaType?: string;
    /**
     * Employee work authorization. Must match one of the system coded values.<br  /> Max length: 100
     */
    workAuthorization?: string;
    /**
     * End date of employee work eligibility.  Common formats include *MM-DD-CCYY*, *CCYY-MM-DD*.
     */
    workUntil?: string;
}
/**
 * The staged employee model
 */
export declare class StagedEmployee extends SpeakeasyBase {
    /**
     * Add up to 19 direct deposit accounts in addition to the main direct deposit account. IMPORTANT: A direct deposit update will remove ALL existing main and additional direct deposit information in WebPay and replace with information provided on the request. GET API will not return direct deposit data.
     */
    additionalDirectDeposit?: StagedEmployeeAdditionalDirectDeposit[];
    /**
     * Add setup values used for employee benefits integration, insurance plan settings, and ACA reporting.
     */
    benefitSetup?: StagedEmployeeBenefitSetup[];
    /**
     * Employee birthdate. Common formats include *MM-DD-CCYY*, *CCYY-MM-DD*.
     */
    birthDate?: string;
    /**
     * Up to 8 custom fields of boolean (checkbox) type value.
     */
    customBooleanFields?: StagedEmployeeCustomBooleanFields[];
    /**
     * Up to 8 custom fields of the date type value.
     */
    customDateFields?: StagedEmployeeCustomDateFields[];
    /**
     * Up to 8 custom fields of the dropdown type value.
     */
    customDropDownFields?: StagedEmployeeCustomDropDownFields[];
    /**
     * Up to 8 custom fields of numeric type value.
     */
    customNumberFields?: StagedEmployeeCustomNumberFields[];
    /**
     * Up to 8 custom fields of text type value.
     */
    customTextFields?: StagedEmployeeCustomTextFields[];
    /**
     * Add home department cost center, position, supervisor, reviewer, employment type, EEO class, pay settings, and union information.
     */
    departmentPosition?: StagedEmployeeDepartmentPosition[];
    /**
     * Indicates if employee has disability status.
     */
    disabilityDescription?: string;
    /**
     * Leave blank to have Web Pay automatically assign the next available employee ID.<br  /> Max length: 10
     */
    employeeId?: string;
    /**
     * Employee ethnicity.<br  /> Max length: 10
     */
    ethnicity?: string;
    /**
     * Add federal tax amount type (taxCalculationCode), amount or percentage, filing status, and exemptions.
     */
    federalTax?: StagedEmployeeFederalTax[];
    /**
     * Employee first name. <br  />Max length: 40
     */
    firstName?: string;
    /**
     * Reason code for FITW exemption. Common values are *SE* (Statutory employee), *CR* (clergy/Religious). <br  /> Max length: 30
     */
    fitwExemptReason?: string;
    /**
     * Reason code for FUTA exemption. Common values are *501* (5019c)(3) Organization), *IC* (Independent Contractor).<br  /> Max length: 30
     */
    futaExemptReason?: string;
    /**
     * Employee gender. Common values *M* (Male), *F* (Female). <br  />Max length: 1
     */
    gender?: string;
    /**
     * Add employee's home address, personal phone numbers, and personal email.
     */
    homeAddress?: StagedEmployeeHomeAddress[];
    /**
     * Indicates if employee in agriculture or farming.
     */
    isEmployee943?: boolean;
    /**
     * Indicates if employee is a smoker.
     */
    isSmoker?: boolean;
    /**
     * Employee last name. <br  />Max length: 40
     */
    lastName?: string;
    /**
     * Add local tax code, filing status, and exemptions including PA-PSD taxes.
     */
    localTax?: StagedEmployeeLocalTax[];
    /**
     * Add the main direct deposit account. After deposits are made to any additional direct deposit accounts, the remaining net check is deposited in the main direct deposit account. IMPORTANT: A direct deposit update will remove ALL existing main and additional direct deposit information in WebPay and replace with what is provided on the request. GET API will not return direct deposit data.
     */
    mainDirectDeposit?: StagedEmployeeMainDirectDeposit[];
    /**
     * Employee marital status. Common values *D (Divorced), M (Married), S (Single), W (Widowed)*. <br  />Max length: 10
     */
    maritalStatus?: string;
    /**
     * Reason code for Medicare exemption. Common values are *501* (5019c)(3) Organization), *IC* (Independent Contractor).<br  /> Max length: 30
     */
    medExemptReason?: string;
    /**
     * Employee middle name.<br  /> Max length: 20
     */
    middleName?: string;
    /**
     * Add non-primary state tax code, amount type (taxCalculationCode), amount or percentage, filing status, exemptions, supplemental check (specialCheckCalc), and reciprocity code information.
     */
    nonPrimaryStateTax?: StagedEmployeeNonPrimaryStateTax[];
    /**
     * Employee preferred display name.<br  /> Max length: 20
     */
    preferredName?: string;
    /**
     * Add hourly or salary pay rate, effective date, and pay frequency.
     */
    primaryPayRate?: StagedEmployeePrimaryPayRate[];
    /**
     * Add primary state tax code, amount type (taxCalculationCode), amount or percentage, filing status, exemptions, and supplemental check (specialCheckCalc) information. Only one primary state is allowed.
     */
    primaryStateTax?: StagedEmployeePrimaryStateTax[];
    /**
     * Prior last name if applicable.<br  />Max length: 40
     */
    priorLastName?: string;
    /**
     * Employee preferred salutation. <br  />Max length: 10
     */
    salutation?: string;
    /**
     * Reason code for SITW exemption. Common values are *SE* (Statutory employee), *CR* (clergy/Religious). <br  /> Max length: 30
     */
    sitwExemptReason?: string;
    /**
     * Reason code for Social Security exemption. Common values are *SE* (Statutory employee), *CR* (clergy/Religious). <br  /> Max length: 30
     */
    ssExemptReason?: string;
    /**
     * Employee social security number. Leave it blank if valid social security number not available. <br  />Max length: 11
     */
    ssn?: string;
    /**
     * Add employee status, change reason, effective date, and adjusted seniority date. Note that companies that are still in Implementation cannot hire future employees.
     */
    status?: StagedEmployeeStatus[];
    /**
     * Employee name suffix. Common values are *Jr, Sr, II*.<br  />Max length: 30
     */
    suffix?: string;
    /**
     * Reason code for SUI exemption. Common values are *SE* (Statutory employee), *CR* (clergy/Religious). <br  /> Max length: 30
     */
    suiExemptReason?: string;
    /**
     * Employee SUI (State Unemployment Insurance) state. <br  />Max length: 2
     */
    suiState?: string;
    /**
     * Employee 1099R distribution code. Common values are *7* (Normal Distribution), *F* (Charitable Gift Annuity). <br  />Max length: 1
     */
    taxDistributionCode1099R?: string;
    /**
     * Employee tax form for reporting income. Valid values are *W2, 1099M, 1099R*. Default is W2. <br  />Max length: 15
     */
    taxForm?: string;
    /**
     * Indicates if employee is a veteran.
     */
    veteranDescription?: string;
    /**
     * Add Web Time badge number and charge rate and synchronize Web Pay and Web Time employee data.
     */
    webTime?: StagedEmployeeWebTime;
    /**
     * Add employee's work address, phone numbers, and email. Work Location drop down field is not included.
     */
    workAddress?: StagedEmployeeWorkAddress[];
    /**
     * Add I-9 work authorization information.
     */
    workEligibility?: StagedEmployeeWorkEligibility[];
}
