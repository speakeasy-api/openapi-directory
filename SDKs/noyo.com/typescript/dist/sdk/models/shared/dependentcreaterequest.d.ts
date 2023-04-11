import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Type of email address
 */
export declare enum DependentCreateRequestPersonContactEmailAddressTypeEnum {
    Home = "home",
    Work = "work"
}
/**
 * Preferred method of contact for the person
 */
export declare enum DependentCreateRequestPersonContactPreferredMethodEnum {
    Email = "email",
    HomePhone = "home-phone",
    Mail = "mail",
    Other = "other",
    WorkPhone = "work-phone"
}
/**
 * Contact information for the person
 */
export declare class DependentCreateRequestPersonContact extends SpeakeasyBase {
    /**
     * Email address of the person
     */
    emailAddress?: string;
    /**
     * Type of email address
     */
    emailAddressType?: DependentCreateRequestPersonContactEmailAddressTypeEnum;
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
    preferredMethod?: DependentCreateRequestPersonContactPreferredMethodEnum;
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
 */
export declare class DependentCreateRequestPersonDetailsAmericanIndian extends SpeakeasyBase {
    /**
     * Primary state of the federally-recognized American Indian or Alaska Native tribe, if applicable
     */
    state?: DependentCreateRequestPersonDetailsAmericanIndianStateEnum;
    /**
     * Name of the federally-recognized American Indian or Alaska Native tribe, if applicable
     */
    tribe?: string;
}
/**
 * Disability details (if applicable)
 */
export declare class DependentCreateRequestPersonDetailsDisability extends SpeakeasyBase {
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
export declare enum DependentCreateRequestPersonDetailsTobaccoTypesEnum {
    ChewingTobacco = "chewing-tobacco",
    Cigarettes = "cigarettes",
    Pipe = "pipe"
}
/**
 * Tobacco usage details (if applicable)
 */
export declare class DependentCreateRequestPersonDetailsTobacco extends SpeakeasyBase {
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
    types?: DependentCreateRequestPersonDetailsTobaccoTypesEnum[];
    /**
     * True if the person uses tobacco of any kind
     */
    user?: boolean;
}
/**
 * Additional personal details of the person
 */
export declare class DependentCreateRequestPersonDetails extends SpeakeasyBase {
    /**
     * American Indian status details (if applicable)
     */
    americanIndian?: DependentCreateRequestPersonDetailsAmericanIndian;
    /**
     * Disability details (if applicable)
     */
    disability?: DependentCreateRequestPersonDetailsDisability;
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
    tobacco?: DependentCreateRequestPersonDetailsTobacco;
}
/**
 * State postal code of the address
 */
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
 */
export declare class DependentCreateRequestPersonHomeAddress extends SpeakeasyBase {
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
    state: DependentCreateRequestPersonHomeAddressStateEnum;
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
 */
export declare class DependentCreateRequestPersonMailingAddress extends SpeakeasyBase {
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
    state: DependentCreateRequestPersonMailingAddressStateEnum;
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
export declare enum DependentCreateRequestPersonMaritalStatusEnum {
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
export declare enum DependentCreateRequestPersonSexEnum {
    F = "F",
    M = "M",
    U = "U",
    X = "X"
}
/**
 * Personal information for the dependent
 */
export declare class DependentCreateRequestPerson extends SpeakeasyBase {
    /**
     * Contact information for the person
     */
    contact?: DependentCreateRequestPersonContact;
    /**
     * ISO-8601 date string for the date of birth of the person
     */
    dateOfBirth: Date;
    /**
     * Additional personal details of the person
     */
    details?: DependentCreateRequestPersonDetails;
    /**
     * First name of the person
     */
    firstName: string;
    /**
     * Home address of the person
     */
    homeAddress?: DependentCreateRequestPersonHomeAddress;
    /**
     * Last name of the person
     */
    lastName: string;
    /**
     * Mailing address of the person
     */
    mailingAddress?: DependentCreateRequestPersonMailingAddress;
    /**
     * Marital status of the person
     */
    maritalStatus?: DependentCreateRequestPersonMaritalStatusEnum;
    /**
     * Middle name of the person
     */
    middleName?: string;
    /**
     * Sex of the person
     */
    sex: DependentCreateRequestPersonSexEnum;
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
 * Relationship of the dependent to the employee
 */
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
    /**
     * Personal information for the dependent
     */
    person: DependentCreateRequestPerson;
    /**
     * Relationship of the dependent to the employee
     */
    relationship: DependentCreateRequestRelationshipEnum;
}
