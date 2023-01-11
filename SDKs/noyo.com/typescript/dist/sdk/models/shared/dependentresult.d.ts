import { SpeakeasyBase } from "../../../internal/utils";
export declare enum DependentResultPersonContactEmailAddressTypeEnum {
    Home = "home",
    Work = "work"
}
export declare enum DependentResultPersonContactPreferredMethodEnum {
    Email = "email",
    HomePhone = "home-phone",
    Mail = "mail",
    Other = "other",
    WorkPhone = "work-phone"
}
/**
 * Contact information for the person
**/
export declare class DependentResultPersonContact extends SpeakeasyBase {
    emailAddress?: string;
    emailAddressType?: DependentResultPersonContactEmailAddressTypeEnum;
    homePhone?: string;
    preferredLanguage?: string;
    preferredMethod?: DependentResultPersonContactPreferredMethodEnum;
    speaksEnglish?: boolean;
    workPhone?: string;
}
export declare enum DependentResultPersonDetailsAmericanIndianStateEnum {
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
export declare class DependentResultPersonDetailsAmericanIndian extends SpeakeasyBase {
    state?: DependentResultPersonDetailsAmericanIndianStateEnum;
    tribe?: string;
}
/**
 * Disability details (if applicable)
**/
export declare class DependentResultPersonDetailsDisability extends SpeakeasyBase {
    communication?: boolean;
    disabled?: boolean;
    reason?: string;
}
export declare enum DependentResultPersonDetailsTobaccoTypesEnum {
    ChewingTobacco = "chewing-tobacco",
    Cigarettes = "cigarettes",
    Pipe = "pipe"
}
/**
 * Tobacco usage details (if applicable)
**/
export declare class DependentResultPersonDetailsTobacco extends SpeakeasyBase {
    duration?: string;
    frequency?: string;
    types?: DependentResultPersonDetailsTobaccoTypesEnum[];
    user?: boolean;
}
/**
 * Additional personal details of the person
**/
export declare class DependentResultPersonDetails extends SpeakeasyBase {
    americanIndian?: DependentResultPersonDetailsAmericanIndian;
    disability?: DependentResultPersonDetailsDisability;
    isMilitary?: boolean;
    isStudent?: boolean;
    tobacco?: DependentResultPersonDetailsTobacco;
}
export declare enum DependentResultPersonHomeAddressStateEnum {
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
export declare class DependentResultPersonHomeAddress extends SpeakeasyBase {
    city: string;
    county?: string;
    state: DependentResultPersonHomeAddressStateEnum;
    streetOne: string;
    streetTwo?: string;
    zipCode: string;
}
export declare enum DependentResultPersonMailingAddressStateEnum {
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
export declare class DependentResultPersonMailingAddress extends SpeakeasyBase {
    city: string;
    county?: string;
    state: DependentResultPersonMailingAddressStateEnum;
    streetOne: string;
    streetTwo?: string;
    zipCode: string;
}
export declare enum DependentResultPersonMaritalStatusEnum {
    Divorced = "divorced",
    DomesticPartner = "domestic-partner",
    LegallySeparated = "legally-separated",
    Married = "married",
    Single = "single",
    Widowed = "widowed"
}
export declare enum DependentResultPersonSexEnum {
    F = "F",
    M = "M",
    U = "U",
    X = "X"
}
/**
 * Personal information for the dependent
**/
export declare class DependentResultPerson extends SpeakeasyBase {
    contact?: DependentResultPersonContact;
    dateOfBirth: Date;
    details?: DependentResultPersonDetails;
    firstName: string;
    homeAddress?: DependentResultPersonHomeAddress;
    lastName: string;
    mailingAddress?: DependentResultPersonMailingAddress;
    maritalStatus?: DependentResultPersonMaritalStatusEnum;
    middleName?: string;
    sex: DependentResultPersonSexEnum;
    ssn?: string;
    suffix?: string;
}
export declare enum DependentResultRelationshipEnum {
    AdoptedChild = "adopted-child",
    Child = "child",
    CivilUnion = "civil-union",
    DomesticPartner = "domestic-partner",
    ExSpouse = "ex-spouse",
    FosterChild = "foster-child",
    Grandchild = "grandchild",
    LegalGuardianship = "legal-guardianship",
    Other = "other",
    Spouse = "spouse",
    StepChild = "step-child"
}
export declare class DependentResult extends SpeakeasyBase {
    created: number;
    employeeId: string;
    id: string;
    modified: number;
    person: DependentResultPerson;
    relationship: DependentResultRelationshipEnum;
    version: string;
}
