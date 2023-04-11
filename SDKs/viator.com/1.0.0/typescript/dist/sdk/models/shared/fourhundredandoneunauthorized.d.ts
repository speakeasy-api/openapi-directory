import { SpeakeasyBase } from "../../../internal/utils";
export declare enum FourHundredAndOneUNAUTHORIZEDCodeEnum {
    Unauthorized = "UNAUTHORIZED"
}
export declare enum FourHundredAndOneUNAUTHORIZEDMessageEnum {
    InvalidAPIKey = "Invalid API key"
}
/**
 * Unauthorized
 */
export declare class FourHundredAndOneUNAUTHORIZED extends SpeakeasyBase {
    code?: FourHundredAndOneUNAUTHORIZEDCodeEnum;
    message?: FourHundredAndOneUNAUTHORIZEDMessageEnum;
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
