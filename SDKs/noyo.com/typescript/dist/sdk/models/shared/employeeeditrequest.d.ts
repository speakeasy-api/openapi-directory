import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Employee employment dates
**/
export declare class EmployeeEditRequestEmploymentEmploymentDates extends SpeakeasyBase {
    fullTimeStart?: string;
    hireDate?: Date;
    rehire?: string;
    retirement?: string;
    terminated?: string;
}
export declare enum EmployeeEditRequestEmploymentEmploymentStatusEnum {
    Contract = "contract",
    Disabled = "disabled",
    FullTime = "full-time",
    PartTime = "part-time",
    Retired = "retired",
    Terminated = "terminated"
}
export declare enum EmployeeEditRequestEmploymentSalaryTypeEnum {
    Hourly = "hourly",
    Salary = "salary"
}
export declare enum EmployeeEditRequestEmploymentSalaryUnitEnum {
    Annual = "annual",
    Hour = "hour",
    Month = "month",
    SemiMonthly = "semi-monthly",
    Week = "week"
}
/**
 * Employee salary information
**/
export declare class EmployeeEditRequestEmploymentSalary extends SpeakeasyBase {
    amount?: number;
    type?: EmployeeEditRequestEmploymentSalaryTypeEnum;
    unit?: EmployeeEditRequestEmploymentSalaryUnitEnum;
}
/**
 * Employment information for the employee
**/
export declare class EmployeeEditRequestEmployment extends SpeakeasyBase {
    employmentDates?: EmployeeEditRequestEmploymentEmploymentDates;
    employmentStatus?: EmployeeEditRequestEmploymentEmploymentStatusEnum;
    hoursWorked?: number;
    occupation?: string;
    salary?: EmployeeEditRequestEmploymentSalary;
}
export declare enum EmployeeEditRequestPersonContactEmailAddressTypeEnum {
    Home = "home",
    Work = "work"
}
export declare enum EmployeeEditRequestPersonContactPreferredMethodEnum {
    Email = "email",
    HomePhone = "home-phone",
    Mail = "mail",
    Other = "other",
    WorkPhone = "work-phone"
}
/**
 * Contact information for the person
**/
export declare class EmployeeEditRequestPersonContact extends SpeakeasyBase {
    emailAddress?: string;
    emailAddressType?: EmployeeEditRequestPersonContactEmailAddressTypeEnum;
    homePhone?: string;
    preferredLanguage?: string;
    preferredMethod?: EmployeeEditRequestPersonContactPreferredMethodEnum;
    speaksEnglish?: boolean;
    workPhone?: string;
}
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
**/
export declare class EmployeeEditRequestPersonDetailsAmericanIndian extends SpeakeasyBase {
    state?: EmployeeEditRequestPersonDetailsAmericanIndianStateEnum;
    tribe?: string;
}
/**
 * Disability details (if applicable)
**/
export declare class EmployeeEditRequestPersonDetailsDisability extends SpeakeasyBase {
    communication?: boolean;
    disabled?: boolean;
    reason?: string;
}
export declare enum EmployeeEditRequestPersonDetailsTobaccoTypesEnum {
    ChewingTobacco = "chewing-tobacco",
    Cigarettes = "cigarettes",
    Pipe = "pipe"
}
/**
 * Tobacco usage details (if applicable)
**/
export declare class EmployeeEditRequestPersonDetailsTobacco extends SpeakeasyBase {
    duration?: string;
    frequency?: string;
    types?: EmployeeEditRequestPersonDetailsTobaccoTypesEnum[];
    user?: boolean;
}
/**
 * Additional personal details of the person
**/
export declare class EmployeeEditRequestPersonDetails extends SpeakeasyBase {
    americanIndian?: EmployeeEditRequestPersonDetailsAmericanIndian;
    disability?: EmployeeEditRequestPersonDetailsDisability;
    isMilitary?: boolean;
    isStudent?: boolean;
    tobacco?: EmployeeEditRequestPersonDetailsTobacco;
}
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
**/
export declare class EmployeeEditRequestPersonHomeAddress extends SpeakeasyBase {
    city: string;
    county?: string;
    state: EmployeeEditRequestPersonHomeAddressStateEnum;
    streetOne: string;
    streetTwo?: string;
    zipCode: string;
}
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
**/
export declare class EmployeeEditRequestPersonMailingAddress extends SpeakeasyBase {
    city: string;
    county?: string;
    state: EmployeeEditRequestPersonMailingAddressStateEnum;
    streetOne: string;
    streetTwo?: string;
    zipCode: string;
}
export declare enum EmployeeEditRequestPersonMaritalStatusEnum {
    Divorced = "divorced",
    DomesticPartner = "domestic-partner",
    LegallySeparated = "legally-separated",
    Married = "married",
    Single = "single",
    Widowed = "widowed"
}
export declare enum EmployeeEditRequestPersonSexEnum {
    F = "F",
    M = "M",
    U = "U",
    X = "X"
}
/**
 * Personal information for the employee
**/
export declare class EmployeeEditRequestPerson extends SpeakeasyBase {
    contact?: EmployeeEditRequestPersonContact;
    dateOfBirth?: Date;
    details?: EmployeeEditRequestPersonDetails;
    firstName?: string;
    homeAddress?: EmployeeEditRequestPersonHomeAddress;
    lastName?: string;
    mailingAddress?: EmployeeEditRequestPersonMailingAddress;
    maritalStatus?: EmployeeEditRequestPersonMaritalStatusEnum;
    middleName?: string;
    sex?: EmployeeEditRequestPersonSexEnum;
    ssn?: string;
    suffix?: string;
}
export declare class EmployeeEditRequest extends SpeakeasyBase {
    employment?: EmployeeEditRequestEmployment;
    person?: EmployeeEditRequestPerson;
}
