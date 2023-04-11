import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Employee employment dates
 */
export declare class EmployeeEditRequestEmploymentEmploymentDates extends SpeakeasyBase {
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
export declare enum EmployeeEditRequestEmploymentEmploymentStatusEnum {
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
export declare enum EmployeeEditRequestEmploymentSalaryTypeEnum {
    Hourly = "hourly",
    Salary = "salary"
}
/**
 * Unit of salary earned by the employee
 */
export declare enum EmployeeEditRequestEmploymentSalaryUnitEnum {
    Annual = "annual",
    Hour = "hour",
    Month = "month",
    SemiMonthly = "semi-monthly",
    Week = "week"
}
/**
 * Employee salary information
 */
export declare class EmployeeEditRequestEmploymentSalary extends SpeakeasyBase {
    /**
     * Amount of salary earned by the employee in US dollars
     */
    amount?: number;
    /**
     * Type of salary earned by the employee
     */
    type?: EmployeeEditRequestEmploymentSalaryTypeEnum;
    /**
     * Unit of salary earned by the employee
     */
    unit?: EmployeeEditRequestEmploymentSalaryUnitEnum;
}
/**
 * Employment information for the employee
 */
export declare class EmployeeEditRequestEmployment extends SpeakeasyBase {
    /**
     * Employee employment dates
     */
    employmentDates?: EmployeeEditRequestEmploymentEmploymentDates;
    /**
     * Employee employment status at the company
     */
    employmentStatus?: EmployeeEditRequestEmploymentEmploymentStatusEnum;
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
    salary?: EmployeeEditRequestEmploymentSalary;
}
/**
 * Type of email address
 */
export declare enum EmployeeEditRequestPersonContactEmailAddressTypeEnum {
    Home = "home",
    Work = "work"
}
/**
 * Preferred method of contact for the person
 */
export declare enum EmployeeEditRequestPersonContactPreferredMethodEnum {
    Email = "email",
    HomePhone = "home-phone",
    Mail = "mail",
    Other = "other",
    WorkPhone = "work-phone"
}
/**
 * Contact information for the person
 */
export declare class EmployeeEditRequestPersonContact extends SpeakeasyBase {
    /**
     * Email address of the person
     */
    emailAddress?: string;
    /**
     * Type of email address
     */
    emailAddressType?: EmployeeEditRequestPersonContactEmailAddressTypeEnum;
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
    preferredMethod?: EmployeeEditRequestPersonContactPreferredMethodEnum;
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
export declare enum EmployeeEditRequestPersonDetailsAmericanIndianStateEnum {
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
export declare class EmployeeEditRequestPersonDetailsAmericanIndian extends SpeakeasyBase {
    /**
     * Primary state of the federally-recognized American Indian or Alaska Native tribe, if applicable
     */
    state?: EmployeeEditRequestPersonDetailsAmericanIndianStateEnum;
    /**
     * Name of the federally-recognized American Indian or Alaska Native tribe, if applicable
     */
    tribe?: string;
}
/**
 * Disability details (if applicable)
 */
export declare class EmployeeEditRequestPersonDetailsDisability extends SpeakeasyBase {
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
export declare enum EmployeeEditRequestPersonDetailsTobaccoTypesEnum {
    ChewingTobacco = "chewing-tobacco",
    Cigarettes = "cigarettes",
    Pipe = "pipe"
}
/**
 * Tobacco usage details (if applicable)
 */
export declare class EmployeeEditRequestPersonDetailsTobacco extends SpeakeasyBase {
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
    types?: EmployeeEditRequestPersonDetailsTobaccoTypesEnum[];
    /**
     * True if the person uses tobacco of any kind
     */
    user?: boolean;
}
/**
 * Additional personal details of the person
 */
export declare class EmployeeEditRequestPersonDetails extends SpeakeasyBase {
    /**
     * American Indian status details (if applicable)
     */
    americanIndian?: EmployeeEditRequestPersonDetailsAmericanIndian;
    /**
     * Disability details (if applicable)
     */
    disability?: EmployeeEditRequestPersonDetailsDisability;
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
    tobacco?: EmployeeEditRequestPersonDetailsTobacco;
}
/**
 * State postal code of the address
 */
export declare enum EmployeeEditRequestPersonHomeAddressStateEnum {
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
export declare class EmployeeEditRequestPersonHomeAddress extends SpeakeasyBase {
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
    state: EmployeeEditRequestPersonHomeAddressStateEnum;
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
export declare enum EmployeeEditRequestPersonMailingAddressStateEnum {
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
 * Mailing address for the person
 */
export declare class EmployeeEditRequestPersonMailingAddress extends SpeakeasyBase {
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
    state: EmployeeEditRequestPersonMailingAddressStateEnum;
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
export declare enum EmployeeEditRequestPersonMaritalStatusEnum {
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
export declare enum EmployeeEditRequestPersonSexEnum {
    F = "F",
    M = "M",
    U = "U",
    X = "X"
}
/**
 * Personal information for the employee
 */
export declare class EmployeeEditRequestPerson extends SpeakeasyBase {
    /**
     * Contact information for the person
     */
    contact?: EmployeeEditRequestPersonContact;
    /**
     * ISO-8601 date string for the date of birth of the person
     */
    dateOfBirth?: Date;
    /**
     * Additional personal details of the person
     */
    details?: EmployeeEditRequestPersonDetails;
    /**
     * First name of the person
     */
    firstName?: string;
    /**
     * Home address of the person
     */
    homeAddress?: EmployeeEditRequestPersonHomeAddress;
    /**
     * Last name of the person
     */
    lastName?: string;
    /**
     * Mailing address for the person
     */
    mailingAddress?: EmployeeEditRequestPersonMailingAddress;
    /**
     * Marital status of the person
     */
    maritalStatus?: EmployeeEditRequestPersonMaritalStatusEnum;
    /**
     * Middle name of the person
     */
    middleName?: string;
    /**
     * Sex of the person
     */
    sex?: EmployeeEditRequestPersonSexEnum;
    /**
     * Social Security Number of the person
     */
    ssn?: string;
    /**
     * Suffix of the person
     */
    suffix?: string;
}
export declare class EmployeeEditRequest extends SpeakeasyBase {
    /**
     * Employment information for the employee
     */
    employment?: EmployeeEditRequestEmployment;
    /**
     * Personal information for the employee
     */
    person?: EmployeeEditRequestPerson;
}
