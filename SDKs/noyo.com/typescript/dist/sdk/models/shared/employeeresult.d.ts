import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Employee employment dates
**/
export declare class EmployeeResultEmploymentEmploymentDates extends SpeakeasyBase {
    fullTimeStart?: string;
    hireDate?: Date;
    rehire?: string;
    retirement?: string;
    terminated?: string;
}
export declare enum EmployeeResultEmploymentEmploymentStatusEnum {
    Contract = "contract",
    Disabled = "disabled",
    FullTime = "full-time",
    PartTime = "part-time",
    Retired = "retired",
    Terminated = "terminated"
}
export declare enum EmployeeResultEmploymentSalaryTypeEnum {
    Hourly = "hourly",
    Salary = "salary"
}
export declare enum EmployeeResultEmploymentSalaryUnitEnum {
    Annual = "annual",
    Hour = "hour",
    Month = "month",
    SemiMonthly = "semi-monthly",
    Week = "week"
}
/**
 * Employee salary information
**/
export declare class EmployeeResultEmploymentSalary extends SpeakeasyBase {
    amount?: number;
    type?: EmployeeResultEmploymentSalaryTypeEnum;
    unit?: EmployeeResultEmploymentSalaryUnitEnum;
}
/**
 * Employment information for the employee
**/
export declare class EmployeeResultEmployment extends SpeakeasyBase {
    employmentDates?: EmployeeResultEmploymentEmploymentDates;
    employmentStatus?: EmployeeResultEmploymentEmploymentStatusEnum;
    hoursWorked?: number;
    occupation?: string;
    salary?: EmployeeResultEmploymentSalary;
}
export declare enum EmployeeResultPersonContactEmailAddressTypeEnum {
    Home = "home",
    Work = "work"
}
export declare enum EmployeeResultPersonContactPreferredMethodEnum {
    Email = "email",
    HomePhone = "home-phone",
    Mail = "mail",
    Other = "other",
    WorkPhone = "work-phone"
}
/**
 * Contact information for the person
**/
export declare class EmployeeResultPersonContact extends SpeakeasyBase {
    emailAddress?: string;
    emailAddressType?: EmployeeResultPersonContactEmailAddressTypeEnum;
    homePhone?: string;
    preferredLanguage?: string;
    preferredMethod?: EmployeeResultPersonContactPreferredMethodEnum;
    speaksEnglish?: boolean;
    workPhone?: string;
}
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
**/
export declare class EmployeeResultPersonDetailsAmericanIndian extends SpeakeasyBase {
    state?: EmployeeResultPersonDetailsAmericanIndianStateEnum;
    tribe?: string;
}
/**
 * Disability details (if applicable)
**/
export declare class EmployeeResultPersonDetailsDisability extends SpeakeasyBase {
    communication?: boolean;
    disabled?: boolean;
    reason?: string;
}
export declare enum EmployeeResultPersonDetailsTobaccoTypesEnum {
    ChewingTobacco = "chewing-tobacco",
    Cigarettes = "cigarettes",
    Pipe = "pipe"
}
/**
 * Tobacco usage details (if applicable)
**/
export declare class EmployeeResultPersonDetailsTobacco extends SpeakeasyBase {
    duration?: string;
    frequency?: string;
    types?: EmployeeResultPersonDetailsTobaccoTypesEnum[];
    user?: boolean;
}
/**
 * Additional personal details of the person
**/
export declare class EmployeeResultPersonDetails extends SpeakeasyBase {
    americanIndian?: EmployeeResultPersonDetailsAmericanIndian;
    disability?: EmployeeResultPersonDetailsDisability;
    isMilitary?: boolean;
    isStudent?: boolean;
    tobacco?: EmployeeResultPersonDetailsTobacco;
}
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
**/
export declare class EmployeeResultPersonHomeAddress extends SpeakeasyBase {
    city: string;
    county?: string;
    state: EmployeeResultPersonHomeAddressStateEnum;
    streetOne: string;
    streetTwo?: string;
    zipCode: string;
}
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
**/
export declare class EmployeeResultPersonMailingAddress extends SpeakeasyBase {
    city: string;
    county?: string;
    state: EmployeeResultPersonMailingAddressStateEnum;
    streetOne: string;
    streetTwo?: string;
    zipCode: string;
}
export declare enum EmployeeResultPersonMaritalStatusEnum {
    Divorced = "divorced",
    DomesticPartner = "domestic-partner",
    LegallySeparated = "legally-separated",
    Married = "married",
    Single = "single",
    Widowed = "widowed"
}
export declare enum EmployeeResultPersonSexEnum {
    F = "F",
    M = "M",
    U = "U",
    X = "X"
}
/**
 * Personal information for the employee
**/
export declare class EmployeeResultPerson extends SpeakeasyBase {
    contact?: EmployeeResultPersonContact;
    dateOfBirth: Date;
    details?: EmployeeResultPersonDetails;
    firstName: string;
    homeAddress?: EmployeeResultPersonHomeAddress;
    lastName: string;
    mailingAddress?: EmployeeResultPersonMailingAddress;
    maritalStatus?: EmployeeResultPersonMaritalStatusEnum;
    middleName?: string;
    sex: EmployeeResultPersonSexEnum;
    ssn?: string;
    suffix?: string;
}
export declare class EmployeeResult extends SpeakeasyBase {
    created: number;
    employment: EmployeeResultEmployment;
    groupId: string;
    id: string;
    modified: number;
    person: EmployeeResultPerson;
    version: string;
}
