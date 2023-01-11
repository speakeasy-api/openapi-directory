import { SpeakeasyBase } from "../../../internal/utils";
export declare enum DependentEditRequestPersonContactEmailAddressTypeEnum {
    Home = "home",
    Work = "work"
}
export declare enum DependentEditRequestPersonContactPreferredMethodEnum {
    Email = "email",
    HomePhone = "home-phone",
    Mail = "mail",
    Other = "other",
    WorkPhone = "work-phone"
}
/**
 * Contact information for the person
**/
export declare class DependentEditRequestPersonContact extends SpeakeasyBase {
    emailAddress?: string;
    emailAddressType?: DependentEditRequestPersonContactEmailAddressTypeEnum;
    homePhone?: string;
    preferredLanguage?: string;
    preferredMethod?: DependentEditRequestPersonContactPreferredMethodEnum;
    speaksEnglish?: boolean;
    workPhone?: string;
}
export declare enum DependentEditRequestPersonDetailsAmericanIndianStateEnum {
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
export declare class DependentEditRequestPersonDetailsAmericanIndian extends SpeakeasyBase {
    state?: DependentEditRequestPersonDetailsAmericanIndianStateEnum;
    tribe?: string;
}
/**
 * Disability details (if applicable)
**/
export declare class DependentEditRequestPersonDetailsDisability extends SpeakeasyBase {
    communication?: boolean;
    disabled?: boolean;
    reason?: string;
}
export declare enum DependentEditRequestPersonDetailsTobaccoTypesEnum {
    ChewingTobacco = "chewing-tobacco",
    Cigarettes = "cigarettes",
    Pipe = "pipe"
}
/**
 * Tobacco usage details (if applicable)
**/
export declare class DependentEditRequestPersonDetailsTobacco extends SpeakeasyBase {
    duration?: string;
    frequency?: string;
    types?: DependentEditRequestPersonDetailsTobaccoTypesEnum[];
    user?: boolean;
}
/**
 * Additional personal details of the person
**/
export declare class DependentEditRequestPersonDetails extends SpeakeasyBase {
    americanIndian?: DependentEditRequestPersonDetailsAmericanIndian;
    disability?: DependentEditRequestPersonDetailsDisability;
    isMilitary?: boolean;
    isStudent?: boolean;
    tobacco?: DependentEditRequestPersonDetailsTobacco;
}
export declare enum DependentEditRequestPersonHomeAddressStateEnum {
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
export declare class DependentEditRequestPersonHomeAddress extends SpeakeasyBase {
    city: string;
    county?: string;
    state: DependentEditRequestPersonHomeAddressStateEnum;
    streetOne: string;
    streetTwo?: string;
    zipCode: string;
}
export declare enum DependentEditRequestPersonMailingAddressStateEnum {
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
export declare class DependentEditRequestPersonMailingAddress extends SpeakeasyBase {
    city: string;
    county?: string;
    state: DependentEditRequestPersonMailingAddressStateEnum;
    streetOne: string;
    streetTwo?: string;
    zipCode: string;
}
export declare enum DependentEditRequestPersonMaritalStatusEnum {
    Divorced = "divorced",
    DomesticPartner = "domestic-partner",
    LegallySeparated = "legally-separated",
    Married = "married",
    Single = "single",
    Widowed = "widowed"
}
export declare enum DependentEditRequestPersonSexEnum {
    F = "F",
    M = "M",
    U = "U",
    X = "X"
}
/**
 * Personal information for the dependent
**/
export declare class DependentEditRequestPerson extends SpeakeasyBase {
    contact?: DependentEditRequestPersonContact;
    dateOfBirth?: Date;
    details?: DependentEditRequestPersonDetails;
    firstName?: string;
    homeAddress?: DependentEditRequestPersonHomeAddress;
    lastName?: string;
    mailingAddress?: DependentEditRequestPersonMailingAddress;
    maritalStatus?: DependentEditRequestPersonMaritalStatusEnum;
    middleName?: string;
    sex?: DependentEditRequestPersonSexEnum;
    ssn?: string;
    suffix?: string;
}
export declare enum DependentEditRequestRelationshipEnum {
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
export declare class DependentEditRequest extends SpeakeasyBase {
    person?: DependentEditRequestPerson;
    relationship?: DependentEditRequestRelationshipEnum;
}
