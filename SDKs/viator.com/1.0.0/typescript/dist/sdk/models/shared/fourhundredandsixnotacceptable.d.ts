import { SpeakeasyBase } from "../../../internal/utils";
export declare enum FourHundredAndSixNOTACCEPTABLECodeEnum {
    InvalidHeaderValue = "INVALID_HEADER_VALUE"
}
/**
 * Not Acceptable
 */
export declare class FourHundredAndSixNOTACCEPTABLE extends SpeakeasyBase {
    code?: FourHundredAndSixNOTACCEPTABLECodeEnum;
    /**
     * Describes which in-header parameter was not acceptable to this system; e.g., 'Invalid value for header: exp-api-key'
     */
    message?: string;
    /**
     * Timestamp of the request
     *
     * @remarks
     *
     *   * e.g.: `2019-09-17T03:20:45.737043Z`
     *
     */
    timestamp?: string;
    /**
     * Tracking identifier for this error response
     */
    trackingId?: string;
}
