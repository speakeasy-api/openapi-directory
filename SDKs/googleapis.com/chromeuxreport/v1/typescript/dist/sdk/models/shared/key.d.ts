import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The form factor is the device class that all users used to access the site for this record. If the form factor is unspecified, then aggregated data over all form factors will be returned.
 */
export declare enum KeyFormFactorEnum {
    AllFormFactors = "ALL_FORM_FACTORS",
    Phone = "PHONE",
    Desktop = "DESKTOP",
    Tablet = "TABLET"
}
/**
 * Key defines all the dimensions that identify this record as unique.
 */
export declare class Key extends SpeakeasyBase {
    /**
     * The effective connection type is the general connection class that all users experienced for this record. This field uses the values ["offline", "slow-2G", "2G", "3G", "4G"] as specified in: https://wicg.github.io/netinfo/#effective-connection-types If the effective connection type is unspecified, then aggregated data over all effective connection types will be returned.
     */
    effectiveConnectionType?: string;
    /**
     * The form factor is the device class that all users used to access the site for this record. If the form factor is unspecified, then aggregated data over all form factors will be returned.
     */
    formFactor?: KeyFormFactorEnum;
    /**
     * Origin specifies the origin that this record is for. Note: When specifying an origin, data for loads under this origin over all pages are aggregated into origin level user experience data.
     */
    origin?: string;
    /**
     * Url specifies a specific url that this record is for. Note: When specifying a "url" only data for that specific url will be aggregated.
     */
    url?: string;
}
