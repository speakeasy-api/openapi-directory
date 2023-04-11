import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Employee employment dates
 */
export declare class EmployeeResultEmploymentEmploymentDates extends SpeakeasyBase {
    /**
     * ISO-8601 date string for start date as a full time employee with the group (if applicable)
     */
    fullTimeStart?: string;
    /**
     * ISO-8601 date string for the hire date of the employee
     */
    hireDate?: Date;
    /**
     * ISO-8601 date string for the rehire date of the employee (if applicable)
     */
    rehire?: string;
    /**
     * ISO-8601 date string for the retirement date of the employee (if applicable)
     */
    retirement?: string;
    /**
     * ISO-8601 date string for the termination date of the employee (if applicable)
     */
    terminated?: string;
}
/**
 * Employee employment status at the company
 */
export declare enum EmployeeResultEmploymentEmploymentStatusEnum {
    Contract = "contract",
    Disabled = "disabled",
    FullTime = "full-time",
    PartTime = "part-time",
    Retired = "retired",
    Terminated = "terminated"
}
/**
 * Type of salary earned by the employee
 */
export declare enum EmployeeResultEmploymentSalaryTypeEnum {
    Hourly = "hourly",
    Salary = "salary"
}
/**
 * Unit of salary earned by the employee
 */
export declare enum EmployeeResultEmploymentSalaryUnitEnum {
    Annual = "annual",
    Hour = "hour",
    Month = "month",
    SemiMonthly = "semi-monthly",
    Week = "week"
}
/**
 * Employee salary information
 */
export declare class EmployeeResultEmploymentSalary extends SpeakeasyBase {
    /**
     * Amount of salary earned by the employee in US dollars
     */
    amount?: number;
    /**
     * Type of salary earned by the employee
     */
    type?: EmployeeResultEmploymentSalaryTypeEnum;
    /**
     * Unit of salary earned by the employee
     */
    unit?: EmployeeResultEmploymentSalaryUnitEnum;
}
/**
 * Employment information for the employee
 */
export declare class EmployeeResultEmployment extends SpeakeasyBase {
    /**
     * Employee employment dates
     */
    employmentDates?: EmployeeResultEmploymentEmploymentDates;
    /**
     * Employee employment status at the company
     */
    employmentStatus?: EmployeeResultEmploymentEmploymentStatusEnum;
    /**
     * Number of hours worked per week by the employee
     */
    hoursWorked?: number;
    /**
     * Employee occupation or job title
     */
    occupation?: string;
    /**
     * Employee salary information
     */
    salary?: EmployeeResultEmploymentSalary;
}
/**
 * Type of email address
 */
export declare enum EmployeeResultPersonContactEmailAddressTypeEnum {
    Home = "home",
    Work = "work"
}
/**
 * Preferred method of contact for the person
 */
export declare enum EmployeeResultPersonContactPreferredMethodEnum {
    Email = "email",
    HomePhone = "home-phone",
    Mail = "mail",
    Other = "other",
    WorkPhone = "work-phone"
}
/**
 * Contact information for the person
 */
export declare class EmployeeResultPersonContact extends SpeakeasyBase {
    /**
     * Email address of the person
     */
    emailAddress?: string;
    /**
     * Type of email address
     */
    emailAddressType?: EmployeeResultPersonContactEmailAddressTypeEnum;
    /**
     * Home phone number in E.164 format
     */
    homePhone?: string;
    /**
     * Preferred written or spoken language of the person
     */
    preferredLanguage?: string;
    /**
     * Preferred method of contact for the person
     */
    preferredMethod?: EmployeeResultPersonContactPreferredMethodEnum;
    /**
     * True if the person can speak or communicate in English
     */
    speaksEnglish?: boolean;
    /**
     * Work phone number in E.164 format
     */
    workPhone?: string;
}
/**
 * Primary state of the federally-recognized American Indian or Alaska Native tribe, if applicable
 */
export declare enum EmployeeResultPersonDetailsAmericanIndianStateEnum {
    Ak = "AK",
    Al = "AL",
    Ar = "AR",
    As = "AS",
    Az = "AZ",
    Ca = "CA",
    Co = "CO",
    Ct = "CT",
    Dc = "DC",
    De = "DE",
    Fl = "FL",
    Fm = "FM",
    Ga = "GA",
    Gu = "GU",
    Hi = "HI",
    Ia = "IA",
    Id = "ID",
    Il = "IL",
    In = "IN",
    Ks = "KS",
    Ky = "KY",
    La = "LA",
    Ma = "MA",
    Md = "MD",
    Me = "ME",
    Mh = "MH",
    Mi = "MI",
    Mn = "MN",
    Mo = "MO",
    Mp = "MP",
    Ms = "MS",
    Mt = "MT",
    Nc = "NC",
    Nd = "ND",
    Ne = "NE",
    Nh = "NH",
    Nj = "NJ",
    Nm = "NM",
    Nv = "NV",
    Ny = "NY",
    Oh = "OH",
    Ok = "OK",
    Or = "OR",
    Pa = "PA",
    Pr = "PR",
    Pw = "PW",
    Ri = "RI",
    Sc = "SC",
    Sd = "SD",
    Tn = "TN",
    Tx = "TX",
    Um = "UM",
    Ut = "UT",
    Va = "VA",
    Vi = "VI",
    Vt = "VT",
    Wa = "WA",
    Wi = "WI",
    Wv = "WV",
    Wy = "WY"
}
/**
 * American Indian status details (if applicable)
 */
export declare class EmployeeResultPersonDetailsAmericanIndian extends SpeakeasyBase {
    /**
     * Primary state of the federally-recognized American Indian or Alaska Native tribe, if applicable
     */
    state?: EmployeeResultPersonDetailsAmericanIndianStateEnum;
    /**
     * Name of the federally-recognized American Indian or Alaska Native tribe, if applicable
     */
    tribe?: string;
}
/**
 * Disability details (if applicable)
 */
export declare class EmployeeResultPersonDetailsDisability extends SpeakeasyBase {
    /**
     * True if the disability impacts the ability to communicate or read
     */
    communication?: boolean;
    /**
     * True if the member has a disability
     */
    disabled?: boolean;
    /**
     * Description of the disability
     */
    reason?: string;
}
/**
 * Type of tobacco use
 */
export declare enum EmployeeResultPersonDetailsTobaccoTypesEnum {
    ChewingTobacco = "chewing-tobacco",
    Cigarettes = "cigarettes",
    Pipe = "pipe"
}
/**
 * Tobacco usage details (if applicable)
 */
export declare class EmployeeResultPersonDetailsTobacco extends SpeakeasyBase {
    /**
     * Duration of tobacco use
     */
    duration?: string;
    /**
     * Frequency of tobacco use
     */
    frequency?: string;
    /**
     * List of types of tobacco use
     */
    types?: EmployeeResultPersonDetailsTobaccoTypesEnum[];
    /**
     * True if the person uses tobacco of any kind
     */
    user?: boolean;
}
/**
 * Additional personal details of the person
 */
export declare class EmployeeResultPersonDetails extends SpeakeasyBase {
    /**
     * American Indian status details (if applicable)
     */
    americanIndian?: EmployeeResultPersonDetailsAmericanIndian;
    /**
     * Disability details (if applicable)
     */
    disability?: EmployeeResultPersonDetailsDisability;
    /**
     * True if the person is in the military
     */
    isMilitary?: boolean;
    /**
     * True if the person is a student
     */
    isStudent?: boolean;
    /**
     * Tobacco usage details (if applicable)
     */
    tobacco?: EmployeeResultPersonDetailsTobacco;
}
/**
 * State postal code of the address
 */
export declare enum EmployeeResultPersonHomeAddressStateEnum {
    Ak = "AK",
    Al = "AL",
    Ar = "AR",
    As = "AS",
    Az = "AZ",
    Ca = "CA",
    Co = "CO",
    Ct = "CT",
    Dc = "DC",
    De = "DE",
    Fl = "FL",
    Fm = "FM",
    Ga = "GA",
    Gu = "GU",
    Hi = "HI",
    Ia = "IA",
    Id = "ID",
    Il = "IL",
    In = "IN",
    Ks = "KS",
    Ky = "KY",
    La = "LA",
    Ma = "MA",
    Md = "MD",
    Me = "ME",
    Mh = "MH",
    Mi = "MI",
    Mn = "MN",
    Mo = "MO",
    Mp = "MP",
    Ms = "MS",
    Mt = "MT",
    Nc = "NC",
    Nd = "ND",
    Ne = "NE",
    Nh = "NH",
    Nj = "NJ",
    Nm = "NM",
    Nv = "NV",
    Ny = "NY",
    Oh = "OH",
    Ok = "OK",
    Or = "OR",
    Pa = "PA",
    Pr = "PR",
    Pw = "PW",
    Ri = "RI",
    Sc = "SC",
    Sd = "SD",
    Tn = "TN",
    Tx = "TX",
    Um = "UM",
    Ut = "UT",
    Va = "VA",
    Vi = "VI",
    Vt = "VT",
    Wa = "WA",
    Wi = "WI",
    Wv = "WV",
    Wy = "WY"
}
/**
 * Home address of the person
 */
export declare class EmployeeResultPersonHomeAddress extends SpeakeasyBase {
    /**
     * City of the address
     */
    city: string;
    /**
     * County of the address
     */
    county?: string;
    /**
     * State postal code of the address
     */
    state: EmployeeResultPersonHomeAddressStateEnum;
    /**
     * Line one of the address
     */
    streetOne: string;
    /**
     * Line two of the address
     */
    streetTwo?: string;
    /**
     * Zip code of the address
     */
    zipCode: string;
}
/**
 * State postal code of the address
 */
export declare enum EmployeeResultPersonMailingAddressStateEnum {
    Ak = "AK",
    Al = "AL",
    Ar = "AR",
    As = "AS",
    Az = "AZ",
    Ca = "CA",
    Co = "CO",
    Ct = "CT",
    Dc = "DC",
    De = "DE",
    Fl = "FL",
    Fm = "FM",
    Ga = "GA",
    Gu = "GU",
    Hi = "HI",
    Ia = "IA",
    Id = "ID",
    Il = "IL",
    In = "IN",
    Ks = "KS",
    Ky = "KY",
    La = "LA",
    Ma = "MA",
    Md = "MD",
    Me = "ME",
    Mh = "MH",
    Mi = "MI",
    Mn = "MN",
    Mo = "MO",
    Mp = "MP",
    Ms = "MS",
    Mt = "MT",
    Nc = "NC",
    Nd = "ND",
    Ne = "NE",
    Nh = "NH",
    Nj = "NJ",
    Nm = "NM",
    Nv = "NV",
    Ny = "NY",
    Oh = "OH",
    Ok = "OK",
    Or = "OR",
    Pa = "PA",
    Pr = "PR",
    Pw = "PW",
    Ri = "RI",
    Sc = "SC",
    Sd = "SD",
    Tn = "TN",
    Tx = "TX",
    Um = "UM",
    Ut = "UT",
    Va = "VA",
    Vi = "VI",
    Vt = "VT",
    Wa = "WA",
    Wi = "WI",
    Wv = "WV",
    Wy = "WY"
}
/**
 * Mailing address of the person
 */
export declare class EmployeeResultPersonMailingAddress extends SpeakeasyBase {
    /**
     * City of the address
     */
    city: string;
    /**
     * County of the address
     */
    county?: string;
    /**
     * State postal code of the address
     */
    state: EmployeeResultPersonMailingAddressStateEnum;
    /**
     * Line one of the address
     */
    streetOne: string;
    /**
     * Line two of the address
     */
    streetTwo?: string;
    /**
     * Zip code of the address
     */
    zipCode: string;
}
/**
 * Marital status of the person
 */
export declare enum EmployeeResultPersonMaritalStatusEnum {
    Divorced = "divorced",
    DomesticPartner = "domestic-partner",
    LegallySeparated = "legally-separated",
    Married = "married",
    Single = "single",
    Widowed = "widowed"
}
/**
 * Sex of the person
 */
export declare enum EmployeeResultPersonSexEnum {
    F = "F",
    M = "M",
    U = "U",
    X = "X"
}
/**
 * Personal information for the employee
 */
export declare class EmployeeResultPerson extends SpeakeasyBase {
    /**
     * Contact information for the person
     */
    contact?: EmployeeResultPersonContact;
    /**
     * ISO-8601 date string for the date of birth of the person
     */
    dateOfBirth: Date;
    /**
     * Additional personal details of the person
     */
    details?: EmployeeResultPersonDetails;
    /**
     * First name of the person
     */
    firstName: string;
    /**
     * Home address of the person
     */
    homeAddress?: EmployeeResultPersonHomeAddress;
    /**
     * Last name of the person
     */
    lastName: string;
    /**
     * Mailing address of the person
     */
    mailingAddress?: EmployeeResultPersonMailingAddress;
    /**
     * Marital status of the person
     */
    maritalStatus?: EmployeeResultPersonMaritalStatusEnum;
    /**
     * Middle name of the person
     */
    middleName?: string;
    /**
     * Sex of the person
     */
    sex: EmployeeResultPersonSexEnum;
    /**
     * Social Security Number of the person
     */
    ssn?: string;
    /**
     * Suffix of the person
     */
    suffix?: string;
}
/**
 * Successful Response - Returns a single Employee
 */
export declare class EmployeeResult extends SpeakeasyBase {
    /**
     * The date the record was created
     */
    created: number;
    /**
     * Employment information for the employee
     */
    employment: EmployeeResultEmployment;
    /**
     * Unique identifier of the group in Noyo
     */
    groupId: string;
    /**
     * Unique identifier of the record in Noyo
     */
    id: string;
    /**
     * The date the record was last updated
     */
    modified: number;
    /**
     * Personal information for the employee
     */
    person: EmployeeResultPerson;
    /**
     * Current version of the record
     */
    version: string;
}
