import { SpeakeasyBase } from "../../../internal/utils";
/**
 * POST parameters
 */
export declare class HangupCallParameters extends SpeakeasyBase {
    /**
     * Unique identifier of the call (when established); this parameter is mutually exclusive with RequestUUID
     */
    callUUID?: string;
    /**
     * Unique identifier of the API request (when the call is not established yet); this parameter is mutually exclusive with CallUUID
     */
    requestUUID?: string;
}
