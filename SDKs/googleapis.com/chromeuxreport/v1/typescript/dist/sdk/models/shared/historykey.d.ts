import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The form factor is the device class that all users used to access the site for this record. If the form factor is unspecified, then aggregated data over all form factors will be returned.
 */
export declare enum HistoryKeyFormFactorEnum {
    AllFormFactors = "ALL_FORM_FACTORS",
    Phone = "PHONE",
    Desktop = "DESKTOP",
    Tablet = "TABLET"
}
/**
 * Key defines all the dimensions that identify this record as unique.
 */
export declare class HistoryKey extends SpeakeasyBase {
    /**
     * The form factor is the device class that all users used to access the site for this record. If the form factor is unspecified, then aggregated data over all form factors will be returned.
     */
    formFactor?: HistoryKeyFormFactorEnum;
    /**
     * Origin specifies the origin that this record is for. Note: When specifying an origin, data for loads under this origin over all pages are aggregated into origin level user experience data.
     */
    origin?: string;
    /**
     * Url specifies a specific url that this record is for. This url should be normalized, following the normalization actions taken in the request to increase the chances of successful lookup. Note: When specifying a "url" only data for that specific url will be aggregated.
     */
    url?: string;
}
