import { SpeakeasyBase } from "../../../internal/utils";
export declare enum AddressV1CountryCodeEnum {
    Usa = "USA"
}
export declare enum AddressV1StateEnum {
    Al = "AL",
    Ak = "AK",
    Az = "AZ",
    Ar = "AR",
    Ca = "CA",
    Co = "CO",
    Ct = "CT",
    Dc = "DC",
    De = "DE",
    Fl = "FL",
    Ga = "GA",
    Hi = "HI",
    Id = "ID",
    Il = "IL",
    In = "IN",
    Ia = "IA",
    Ks = "KS",
    Ky = "KY",
    La = "LA",
    Me = "ME",
    Md = "MD",
    Ma = "MA",
    Mi = "MI",
    Mn = "MN",
    Ms = "MS",
    Mo = "MO",
    Mt = "MT",
    Ne = "NE",
    Nv = "NV",
    Nh = "NH",
    Nj = "NJ",
    Nm = "NM",
    Ny = "NY",
    Nc = "NC",
    Nd = "ND",
    Oh = "OH",
    Ok = "OK",
    Or = "OR",
    Pa = "PA",
    Ri = "RI",
    Sc = "SC",
    Sd = "SD",
    Tn = "TN",
    Tx = "TX",
    Ut = "UT",
    Vt = "VT",
    Va = "VA",
    Wa = "WA",
    Wv = "WV",
    Wi = "WI",
    Wy = "WY"
}
/**
 * An address describes a location. `address` can be the [`input_type`](https://www.heraldapi.com/docs/input-types) of a parameter on an [application](https://www.heraldapi.com/docs/application).
 */
export declare class AddressV1 extends SpeakeasyBase {
    city: string;
    countryCode: AddressV1CountryCodeEnum;
    /**
     * First line of street address
     */
    line1: string;
    /**
     * Second line of street address (if applicable)
     */
    line2?: string;
    /**
     * Third line of street address (if applicable)
     */
    line3?: string;
    /**
     * Name of the organization associated with this address (if applicable)
     */
    organization?: string;
    /**
     * 5-digit US ZIP code
     */
    postalCode: string;
    state: AddressV1StateEnum;
}
