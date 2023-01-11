import { SpeakeasyBase } from "../../../internal/utils";
export declare enum DependentCreateRequestPersonContactEmailAddressTypeEnum {
    Home = "home",
    Work = "work"
}
export declare enum DependentCreateRequestPersonContactPreferredMethodEnum {
    Email = "email",
    HomePhone = "home-phone",
    Mail = "mail",
    Other = "other",
    WorkPhone = "work-phone"
}
/**
 * Contact information for the person
**/
export declare class DependentCreateRequestPersonContact extends SpeakeasyBase {
    emailAddress?: string;
    emailAddressType?: DependentCreateRequestPersonContactEmailAddressTypeEnum;
    homePhone?: string;
    preferredLanguage?: string;
    preferredMethod?: DependentCreateRequestPersonContactPreferredMethodEnum;
    speaksEnglish?: boolean;
    workPhone?: string;
}
export declare enum DependentCreateRequestPersonDetailsAmericanIndianStateEnum {
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
export declare class DependentCreateRequestPersonDetailsAmericanIndian extends SpeakeasyBase {
    state?: DependentCreateRequestPersonDetailsAmericanIndianStateEnum;
    tribe?: string;
}
/**
 * Disability details (if applicable)
**/
export declare class DependentCreateRequestPersonDetailsDisability extends SpeakeasyBase {
    communication?: boolean;
    disabled?: boolean;
    reason?: string;
}
export declare enum DependentCreateRequestPersonDetailsTobaccoTypesEnum {
    ChewingTobacco = "chewing-tobacco",
    Cigarettes = "cigarettes",
    Pipe = "pipe"
}
/**
 * Tobacco usage details (if applicable)
**/
export declare class DependentCreateRequestPersonDetailsTobacco extends SpeakeasyBase {
    duration?: string;
    frequency?: string;
    types?: DependentCreateRequestPersonDetailsTobaccoTypesEnum[];
    user?: boolean;
}
/**
 * Additional personal details of the person
**/
export declare class DependentCreateRequestPersonDetails extends SpeakeasyBase {
    americanIndian?: DependentCreateRequestPersonDetailsAmericanIndian;
    disability?: DependentCreateRequestPersonDetailsDisability;
    isMilitary?: boolean;
    isStudent?: boolean;
    tobacco?: DependentCreateRequestPersonDetailsTobacco;
}
export declare enum DependentCreateRequestPersonHomeAddressStateEnum {
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
export declare class DependentCreateRequestPersonHomeAddress extends SpeakeasyBase {
    city: string;
    county?: string;
    state: DependentCreateRequestPersonHomeAddressStateEnum;
    streetOne: string;
    streetTwo?: string;
    zipCode: string;
}
export declare enum DependentCreateRequestPersonMailingAddressStateEnum {
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
export declare class DependentCreateRequestPersonMailingAddress extends SpeakeasyBase {
    city: string;
    county?: string;
    state: DependentCreateRequestPersonMailingAddressStateEnum;
    streetOne: string;
    streetTwo?: string;
    zipCode: string;
}
export declare enum DependentCreateRequestPersonMaritalStatusEnum {
    Divorced = "divorced",
    DomesticPartner = "domestic-partner",
    LegallySeparated = "legally-separated",
    Married = "married",
    Single = "single",
    Widowed = "widowed"
}
export declare enum DependentCreateRequestPersonSexEnum {
    F = "F",
    M = "M",
    U = "U",
    X = "X"
}
/**
 * Personal information for the dependent
**/
export declare class DependentCreateRequestPerson extends SpeakeasyBase {
    contact?: DependentCreateRequestPersonContact;
    dateOfBirth: Date;
    details?: DependentCreateRequestPersonDetails;
    firstName: string;
    homeAddress?: DependentCreateRequestPersonHomeAddress;
    lastName: string;
    mailingAddress?: DependentCreateRequestPersonMailingAddress;
    maritalStatus?: DependentCreateRequestPersonMaritalStatusEnum;
    middleName?: string;
    sex: DependentCreateRequestPersonSexEnum;
    ssn?: string;
    suffix?: string;
}
export declare enum DependentCreateRequestRelationshipEnum {
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
export declare class DependentCreateRequest extends SpeakeasyBase {
    person: DependentCreateRequestPerson;
    relationship: DependentCreateRequestRelationshipEnum;
}
