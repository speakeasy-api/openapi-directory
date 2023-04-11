import { SpeakeasyBase } from "../../../internal/utils";
/**
 * State postal code of the address
 */
export declare enum LocationResultAddressStateEnum {
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
 * Address of the group location
 */
export declare class LocationResultAddress extends SpeakeasyBase {
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
    state: LocationResultAddressStateEnum;
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
 * Successful Response - Returns the new Location
 */
export declare class LocationResult extends SpeakeasyBase {
    /**
     * Address of the group location
     */
    address: LocationResultAddress;
    /**
     * Boolean field to determine whether the group location should be used as the billing group location
     */
    billingLocation: boolean;
    /**
     * The date the record was created
     */
    created: number;
    /**
     * Display name for the group location
     */
    displayName: string;
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
     * Boolean field to determine whether the group location should be used as the primary group location
     */
    primaryLocation: boolean;
    /**
     * Current version of the record
     */
    version: string;
}
