import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Employee employment dates
**/
export declare class EmployeeCreateRequestEmploymentEmploymentDates extends SpeakeasyBase {
    fullTimeStart?: string;
    hireDate?: Date;
    rehire?: string;
    retirement?: string;
    terminated?: string;
}
export declare enum EmployeeCreateRequestEmploymentEmploymentStatusEnum {
    Contract = "contract",
    Disabled = "disabled",
    FullTime = "full-time",
    PartTime = "part-time",
    Retired = "retired",
    Terminated = "terminated"
}
export declare enum EmployeeCreateRequestEmploymentSalaryTypeEnum {
    Hourly = "hourly",
    Salary = "salary"
}
export declare enum EmployeeCreateRequestEmploymentSalaryUnitEnum {
    Annual = "annual",
    Hour = "hour",
    Month = "month",
    SemiMonthly = "semi-monthly",
    Week = "week"
}
/**
 * Employee salary information
**/
export declare class EmployeeCreateRequestEmploymentSalary extends SpeakeasyBase {
    amount?: number;
    type?: EmployeeCreateRequestEmploymentSalaryTypeEnum;
    unit?: EmployeeCreateRequestEmploymentSalaryUnitEnum;
}
/**
 * Employment information for the employee
**/
export declare class EmployeeCreateRequestEmployment extends SpeakeasyBase {
    employmentDates?: EmployeeCreateRequestEmploymentEmploymentDates;
    employmentStatus?: EmployeeCreateRequestEmploymentEmploymentStatusEnum;
    hoursWorked?: number;
    occupation?: string;
    salary?: EmployeeCreateRequestEmploymentSalary;
}
export declare enum EmployeeCreateRequestPersonContactEmailAddressTypeEnum {
    Home = "home",
    Work = "work"
}
export declare enum EmployeeCreateRequestPersonContactPreferredMethodEnum {
    Email = "email",
    HomePhone = "home-phone",
    Mail = "mail",
    Other = "other",
    WorkPhone = "work-phone"
}
/**
 * Contact information for the person
**/
export declare class EmployeeCreateRequestPersonContact extends SpeakeasyBase {
    emailAddress?: string;
    emailAddressType?: EmployeeCreateRequestPersonContactEmailAddressTypeEnum;
    homePhone?: string;
    preferredLanguage?: string;
    preferredMethod?: EmployeeCreateRequestPersonContactPreferredMethodEnum;
    speaksEnglish?: boolean;
    workPhone?: string;
}
export declare enum EmployeeCreateRequestPersonDetailsAmericanIndianStateEnum {
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
export declare class EmployeeCreateRequestPersonDetailsAmericanIndian extends SpeakeasyBase {
    state?: EmployeeCreateRequestPersonDetailsAmericanIndianStateEnum;
    tribe?: string;
}
/**
 * Disability details (if applicable)
**/
export declare class EmployeeCreateRequestPersonDetailsDisability extends SpeakeasyBase {
    communication?: boolean;
    disabled?: boolean;
    reason?: string;
}
export declare enum EmployeeCreateRequestPersonDetailsTobaccoTypesEnum {
    ChewingTobacco = "chewing-tobacco",
    Cigarettes = "cigarettes",
    Pipe = "pipe"
}
/**
 * Tobacco usage details (if applicable)
**/
export declare class EmployeeCreateRequestPersonDetailsTobacco extends SpeakeasyBase {
    duration?: string;
    frequency?: string;
    types?: EmployeeCreateRequestPersonDetailsTobaccoTypesEnum[];
    user?: boolean;
}
/**
 * Additional personal details of the person
**/
export declare class EmployeeCreateRequestPersonDetails extends SpeakeasyBase {
    americanIndian?: EmployeeCreateRequestPersonDetailsAmericanIndian;
    disability?: EmployeeCreateRequestPersonDetailsDisability;
    isMilitary?: boolean;
    isStudent?: boolean;
    tobacco?: EmployeeCreateRequestPersonDetailsTobacco;
}
export declare enum EmployeeCreateRequestPersonHomeAddressStateEnum {
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
export declare class EmployeeCreateRequestPersonHomeAddress extends SpeakeasyBase {
    city: string;
    county?: string;
    state: EmployeeCreateRequestPersonHomeAddressStateEnum;
    streetOne: string;
    streetTwo?: string;
    zipCode: string;
}
export declare enum EmployeeCreateRequestPersonMailingAddressStateEnum {
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
export declare class EmployeeCreateRequestPersonMailingAddress extends SpeakeasyBase {
    city: string;
    county?: string;
    state: EmployeeCreateRequestPersonMailingAddressStateEnum;
    streetOne: string;
    streetTwo?: string;
    zipCode: string;
}
export declare enum EmployeeCreateRequestPersonMaritalStatusEnum {
    Divorced = "divorced",
    DomesticPartner = "domestic-partner",
    LegallySeparated = "legally-separated",
    Married = "married",
    Single = "single",
    Widowed = "widowed"
}
export declare enum EmployeeCreateRequestPersonSexEnum {
    F = "F",
    M = "M",
    U = "U",
    X = "X"
}
/**
 * Personal information for the employee
**/
export declare class EmployeeCreateRequestPerson extends SpeakeasyBase {
    contact?: EmployeeCreateRequestPersonContact;
    dateOfBirth: Date;
    details?: EmployeeCreateRequestPersonDetails;
    firstName: string;
    homeAddress?: EmployeeCreateRequestPersonHomeAddress;
    lastName: string;
    mailingAddress?: EmployeeCreateRequestPersonMailingAddress;
    maritalStatus?: EmployeeCreateRequestPersonMaritalStatusEnum;
    middleName?: string;
    sex: EmployeeCreateRequestPersonSexEnum;
    ssn?: string;
    suffix?: string;
}
export declare class EmployeeCreateRequest extends SpeakeasyBase {
    employment?: EmployeeCreateRequestEmployment;
    person: EmployeeCreateRequestPerson;
}
