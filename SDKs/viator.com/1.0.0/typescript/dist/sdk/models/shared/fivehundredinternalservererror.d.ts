import { SpeakeasyBase } from "../../../internal/utils";
export declare enum FiveHundredINTERNALSERVERERRORCodeEnum {
    InternalServerError = "INTERNAL_SERVER_ERROR"
}
export declare enum FiveHundredINTERNALSERVERERRORMessageEnum {
    InternalServerError = "Internal server error"
}
/**
 * Internal Server Error
 */
export declare class FiveHundredINTERNALSERVERERROR extends SpeakeasyBase {
    code?: FiveHundredINTERNALSERVERERRORCodeEnum;
    message?: FiveHundredINTERNALSERVERERRORMessageEnum;
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
